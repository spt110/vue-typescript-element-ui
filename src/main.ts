// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import InfiniteScroll from 'vue-infinite-scroll';
import './assets/css/index.scss';
import 'font-awesome/css/font-awesome.css';

axios.defaults.baseURL = '/api-v1/';
Vue.use(ElementUI)
Vue.use(InfiniteScroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
