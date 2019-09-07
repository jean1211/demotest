import Vue from 'vue'
import Router from 'vue-router'
import kind from '@/components/kind.vue'
import send from '@/components/send.vue'
import type from '@/components/type.vue'
import dn from '@/views/代拿.vue'
import dj from '@/views/代寄.vue'
import order from '@/views/我的订单.vue'
import tab from '@/views/tab.vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/order.html/',
  routes: [
    {path: '/', redirect: 'tabid=first'},
    {
      path: '/tabid=first', 
      component:dn,
      name: 'home',
    },
    {
      path: '/tabid=second', 
      component: dj
    },
    {
      path:'/tabid=third',
      component: order,

    }
  ]
})
