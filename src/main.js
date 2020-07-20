// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import './assets/css/base.css'
import './assets/js/font'
import 'vant/lib/index.css'
import { NavBar, PullRefresh, Dialog, Button, Notify } from 'vant'
import './plugins/axios'
import store from '../src/plugins/vuex'
Vue.config.productionTip = false
Vue.use(NavBar)
Vue.use(PullRefresh)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Notify)
/* eslint-disable no-new */
let vm = new Vue({
  data () {
    return {
      bNav: true,
      bFoot: true,
      bloading: false
    }
  },
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
export default vm
