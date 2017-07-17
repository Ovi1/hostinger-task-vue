// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.use(Vuetify)
//base url for JSON data request's
const baseUrl = 'https://jsonplaceholder.typicode.com';
window.axios = axios;
window.baseUrl = baseUrl;
/* eslint-disable no-new */
new Vue
({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
