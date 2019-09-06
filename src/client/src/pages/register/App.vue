<template>
  <div id="app">
    <img src="../../assets/岛.jpg" height="100%" width="100%">
    <div class="left">
      <p>快递代拿！</p>
    </div>
    <div class="right">
      <div class="el_input">
        <p>注册账号</p>
        <el-input v-model="input" placeholder="请输入账号" ref='el-input'></el-input>
        <p v-show='isright' style="color:red;font-size:10px;margin:-2px 0 0 6px">账号已被注册</p>
        <el-input v-model="input_password" placeholder="请输入密码" type="password" ref='el-input2'></el-input>
        <p v-show='isright2' style="color:red;font-size:10px;margin:-2px 0 0 6px">密码格式错误</p>
        <div class="el_a">
          <a href="login.html">前往登录</a>
          <a href="">忘记密码？</a>
        </div>
        <el-button type="primary" round @click='check' @keyup.enter='check'>立即注册</el-button>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      input: '',
      input_password: '',
      isright: false,
      isright2: false,

    }
  },
  methods: {
    check() {
      if (this.input_password === '' || this.input === '') {
        alert('账号或密码不能为空')
      } else {
        this.$axios({
          method: 'post',
          url: '/API/login',
          data: this.qs.stringify({
            account: this.input,
            password: this.password
          })
        }).then((res, err) => {
          if (res) {
            if (res.data === 'true') {
              this.$axios({
                method: 'post',
                url: '/API/register',
                data: this.qs.stringify({
                  account: this.input,
                  password: this.input_password
                })
              }).then((res,err)=>{
                if(res){
                  alert('恭喜您，账号注册成功！')
                }else{
                  alert('账号注册失败QAQ')
                }
              })
            } else {
              this.isright = true
            }
          } else {
            console.log(err)
          }
        })
      }
    }
  }
}

</script>
<style lang="less">
.shadow {
  top: 20%;
  height: 60%;
  box-shadow: -5px -5px 5px rgba(0, 0, 0, .4);
}

.left {
  position: absolute;
  left: 10%;
  width: 40%;
  background-color: grey;
  opacity: 0.5;
  .shadow
}

.right {
  .el-button {
    width: 96%;
    padding: 9px;
    margin-top: 23px;

    .is-round {
      padding: 12px;
    }
  }

  .el_a {
    a {
      font-size: 10px;
      text-decoration: none;
      color: grey;
    }

    a:hover {
      color: red;
    }

    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width:90%;
    padding:0 0 0 7px;
  }

  .el_input {
    position: inherit;
    top: 20%;
    left: 10%;

    p {
      color: grey;
      font-size: 14px;
      margin: 5px;
    }

    .el-input {
      margin: 5px;
      width: 90%;
      height: 80%;
    }
  }

  position:absolute;
  left:50%;
  width:20%;
  background-color:white;
  opacity:0.9;
  top:20%;
  height:60%;
  box-shadow:5px -5px 5px rgba(0, 0, 0, .4);
}

</style>
