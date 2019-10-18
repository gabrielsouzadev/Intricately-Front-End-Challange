import 'Styles/main.scss';
import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './App.vue';

Vue.use(VueRouter)

new Vue({
  render: h =>h(App),
}).$mount('#app');
