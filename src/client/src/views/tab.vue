<template>
  <div id="app">   
<el-tabs v-model="activeName">
    <el-tab-pane label="代拿" name="first"></el-tab-pane>
    <el-tab-pane label="代寄" name="second" ></el-tab-pane>
    <el-tab-pane label="我的订单" name="third"></el-tab-pane>
  </el-tabs>
    </div>
</template>
<script type="text/javascript">
  export default {
    data(){
      return{
       name: 'tab',
       message:'欢迎使用快递代拿服务！',
       activeName: 'first'
      }
    },
    watch:{
      'activeName':function (val) {
        let urlStr = '/tabid=' + val;
        this.$router.push(urlStr)
      }
    },
    methods:{
       handleClick(tab, event) {
        console.log(tab, event);
      },
    }
  }
</script>