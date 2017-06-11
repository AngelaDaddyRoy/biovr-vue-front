// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/routes-config'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vmodal from 'vue-js-modal'
import ToggleButton from 'vue-js-toggle-button'


Vue.config.productionTip = false

//axios.defaults.baseURL = 'http://localhost:8848/api';
axios.defaults.baseURL = 'https://admin.biovr.com.cn/api';
Vue.use(VueAxios, axios)
Vue.use(vmodal)
Vue.use(ToggleButton)

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  template: '<App/>',
  components: { App }
})
