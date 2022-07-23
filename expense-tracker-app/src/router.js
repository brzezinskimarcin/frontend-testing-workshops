import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/src/views/home/index.vue';
import Activity from '@/src/views/activity/index.vue';
import Statistics from '@/src/views/statistics/index.vue';
import Settings from '@/src/views/settings/index.vue';
import activityRoutes from '@/src/views/activity/routes';

Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/activity',
      component: Activity,
      children: activityRoutes,
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
