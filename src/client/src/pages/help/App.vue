<template>
  <div id="app">
    <p>{{message}}</p>
    <a href="../login.html">退出登录</a>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script type="text/javascript">
import tab from '@/views/tab.vue'
export default {
  data() {
    return {
      message: '欢迎使用快递代拿服务！',
      activeName: 'first'
    }
  },
  components: {
    tab
  },
}

</script>
<style lang="less">
</style>
