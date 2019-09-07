<template>
  <div>
    <send :value="dn"></send>
    <input type="text" name="" placeholder="输入地址（如一栋）" ref="address" valu="">
    <input type="text" name="" placeholder="名字" ref="name">
    <input type="text" name="" placeholder="电话" ref="phnone" maxlength="11">
    <p v-show='right' style="color:red;font-size:10px;margin:-2px 0 0 6px">请输入正确的手机号</p>
    <kind :value="dn"></kind>
    <type :value="dn"></type><input type="text" name="" placeholder="取货码（可填备注）" ref="number">
    <el-button type="primary" class="btn1" @click="send_message()">下达订单</el-button>
  </div>
</template>
<script>
// @ is an alias to /src
import kind from '@/components/kind.vue'
import send from '@/components/send.vue'
import type from '@/components/type.vue'

export default {
  name: 'dn',
  components: {
    kind,
    send,
    type
  },
  data() {
    return {
      new_address: "",
      right: false,
      dn: {
        time: ['送达时间', '12:00-14:00', '18:00-20:00', '明天送达'],
        express: ['中通', '圆通', '韵达', '天猫', '申通', '天天快递'],
        size: ['小件（2元）', '中件（3元）', '大件（5元）'],
      },
      order_data: [],
    }
  },
  methods: {
    send_parent: function(new_time, new_kind) {
      this.$root.new_type = new_kind;
      if (new_kind == null) {
        this.$root.new_time = new_time;
      } else {
        this.$root.new_time += new_time;
      }
    },
    send_parent2: function(new_size) {
      this.$root.new_size = new_size;
    },
    send_message: function() {
      console.log(typeof(this.$refs.phnone.value))
      if (this.$refs.address.value === '' || this.$refs.name.value === '' || this.$refs.phnone.value === '' || this.$refs.number.value === '' || this.$root.new_time === '') {
        alert('请将信息填写完整~')
      } else {
        if (!(/^1[3|4|5|8][0-9]\d{8}$/.test(this.$refs.phnone.value))) {
          this.right = true
        } else {
          this.right = false;
          this.$children[1].childB();
          this.$children[2].childC();
          this.$root.new_address = this.$refs.address.value;
          this.$root.name = this.$refs.name.value;
          this.$root.phnone = this.$refs.phnone.value;
          this.$root.number = this.$refs.number.value;
          this.post()
        }
      }
    },
    post() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate()
      if (month >= 1 && month <= 9) {
        month = "0" + month
      };
      if (day >= 0 && day <= 9) {
        day = "0" + day
      };
      var new_data = year + '-' + month + '-' + day;
      this.$axios({
        method: 'post',
        url: '/API/add',
        data: this.qs.stringify({
          account: this.$cookies.get('account'),
          date: new_data,
          time: this.$root.new_time,
          address: this.$refs.address.value,
          name: this.$refs.name.value,
          phone: this.$refs.phnone.value,
          type: this.$root.new_type,
          size: this.$root.new_size,
          number: this.$refs.number.value
        })
      }).then((res) => {
        this.$alert('下单成功！', '消息', {
          confirmButtonText: '确定',
        })
      })
    }
  },
  watch: {
    $route(to, from) {
      if (to.path === '/tabid=third') {
        console.log(this.$cookies.get('account'));
        this.$axios.get('/API/query', { params: { account: this.$cookies.get('account') } }).then((res, err) => {
          if (err) {
            console.log(err)
          };
          this.$root.order_data.push(...JSON.parse(res.data));
          for (let value of this.$root.order_data) {
            value.date = new Date(value.date).toLocaleString().substring(0, 8);
          }
        })
      }
      if (from.path === '/tabid=third') {
        this.$root.order_data = []
      }
    }
  }
}

</script>
<style scoped lang="less">
input {
  outline: none;
  margin-top: 15px;
  font-size: 1em;
  font-family: 仿宋, serif;
  display: block;
  opacity: 0.8;
  padding: 0.2em;
  border-radius: 10px;
  background-color: #D4D7D8;
}

.btn1 {
  margin: 15px 0px 15px;
}

</style>
