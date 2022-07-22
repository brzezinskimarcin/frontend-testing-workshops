import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/index.vue';
import Activity from '@/views/activity/index.vue';
import Statistics from '@/views/statistics/index.vue';
import Settings from '@/views/settings/index.vue';
import activityRoutes from '@/views/activity/routes';

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
