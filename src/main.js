// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vmodal from 'vue-js-modal'


Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8848/api';
Vue.use(VueAxios, axios)
Vue.use(vmodal)
 

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  template: '<App/>',
  components: { App }
})