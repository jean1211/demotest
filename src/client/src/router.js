import Vue from 'vue'
import Router from 'vue-router'
import kind from '@/components/kind.vue'
import send from '@/components/send.vue'
import type from '@/components/type.vue'
import dn from '@/views/代拿.vue'
import dj from '@/views/代寄.vue'
import order from '@/views/我的订单.vue'
import tab from '@/views/tab.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
