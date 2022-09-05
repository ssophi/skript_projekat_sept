import Vue from 'vue';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueSocketIO from 'vue-socket.io';

// createApp(App).use(store).use(router).mount('#app')

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(new VueSocketIO({
  debug: false,
  connection: 'http://vezbe131.herokuapp.com',
  vuex: {
      store,
      actionPrefix: 'socket_',
  }
}));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
