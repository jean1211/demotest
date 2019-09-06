<template>
  <div id="app">
    <img src="../../assets/岛.jpg" height="100%" width="100%">
    <div class="left">
      <p>代拿快递！</p>
    </div>
    <div class="right">
      <div class="el_input">
        <p>用户登录</p>
        <el-input v-model="input" placeholder="请输入账号" ref='el-input'></el-input>
        <p v-show='isright' style="color:red;font-size:10px;margin:-2px 0 0 6px">账号不存在</p>
        <el-input v-model="input_password" placeholder="请输入密码" type="password" ref='el-input2'></el-input>
        <p v-show='isright2' style="color:red;font-size:10px;margin:-2px 0 0 6px">密码错误</p>
        <div class="el_a">
          <a href="register.html">账号注册</a>
          <a href="">忘记密码？</a>
        </div>
        <el-button type="primary" round @click='check' @keyup.enter='check'>立即登录</el-button>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      message: '1111！',
      input: '',
      input_password: '',
      response: [],
      account: [],
      password: [],
      isright: false,
      isright2: false
    }
  },
  methods: {
    check() {
      if(this.input === '' || this.input_password === ''){
        alert('账号或密码不能为空')
      }else{
      this.$axios({
        method: 'post',
        url: '/API/login',
        data: this.qs.stringify({
          account: this.input,
          password: this.password
        })
      }).then((res, err) => {
        this.response.push(...JSON.parse(res.data));
        //用that来接受this，起到过渡作用
        let that = this
        //封装了一个验证的函数
        var test = function(name, password) {
          that.response.forEach(function(element, index) {
            that.account.push(element.account);
          });
          if (that.account.includes(name) == false) {
            that.isright = true;  
          } else {
            that.isright = false;
            for (var i = 0; i < that.response.length; i++) {
              if (that.response[i].account === name) {
                var Index = i;
              }
            }
            if (that.account.includes(name) && that.response[Index].password === password) {
              that.isright = false;
              that.isright2 = false;
              alert('登录成功');
              　window.location.href="order.html";
            } else {
              that.isright2 = true;
            }
          }
          Index = null;
          console.log(Index)
        }
        //传两个参数，账号和密码
        test(this.input, this.input_password)
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
