import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios
Vue.prototype.qs = qs  
axios.defaults.baseURL = 'http://localhost:3000'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  data: {
  },
  render: h => h(App)
}).$mount('#app')
