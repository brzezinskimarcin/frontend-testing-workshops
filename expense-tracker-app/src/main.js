import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import Vue from 'vue';
import App from '@/src/App.vue';
import router from '@/src/router';
import store from '@/src/store';
import '@/src/filters';

Vue.use(ElementUI, { locale });

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
