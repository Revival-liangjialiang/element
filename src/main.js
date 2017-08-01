import Vue from 'vue'
import App from './App'
import store from './store/'
import axios from 'axios'
import $ from 'jquery'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css' 
Vue.config.silent = true
axios.defaults.baseURL = 'http://106.14.144.79/element/'
import vueSee from 'vue-see'
import loadmore from 'mint-ui/lib/loadmore';
import 'mint-ui/lib/button/style.css';
Vue.component(loadmore.name, loadmore);
Vue.use(vueSee)
Vue.use(YDUI)
Vue.prototype.$http = axios
import router from './router'
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
