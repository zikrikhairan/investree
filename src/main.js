import Vue from 'vue';
import axios from 'axios';
import wysiwyg from 'vue-wysiwyg';
import VueMaterial from 'vue-material';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import 'vue-wysiwyg/dist/vueWysiwyg.css';

Vue.use(VueMaterial);
Vue.use(wysiwyg, {});
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
