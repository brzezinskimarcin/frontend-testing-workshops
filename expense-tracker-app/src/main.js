import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/filters';

Vue.use(ElementUI, { locale });

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
