import Vue from 'vue';
import Vuex from 'vuex';

import activity from './activity';
import categories from './categories';
import statistics from './statistics';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    activity,
    categories,
    statistics,
  },
});
