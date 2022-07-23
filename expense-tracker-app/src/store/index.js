import Vue from 'vue';
import Vuex from 'vuex';

import activity from '@/src/store/activity';
import categories from '@/src/store/categories';
import statistics from '@/src/store/statistics';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    activity,
    categories,
    statistics,
  },
});
