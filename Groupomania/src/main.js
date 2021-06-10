import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios';
import store from './vuex/store';
import VueResource from 'vue-resource'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

Vue.use(VueResource)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
