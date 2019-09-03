<template>
  <div id="app">
    <p>{{message}}</p>
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
  watch: {
    'activeName': (val) => {
      let urlStr = '/tabid=' + val;
      console.log(urlStr)
      console.log(this)
      router.push(urlStr)
    }
  },
  components: {
    tab
  },
}

</script>
<style lang="less">
</style>
