import axios from 'axios';

const state = {
  searchQuery: {
    categories: [],
    amountMin: null,
    amountMax: null,
    titleContains: null,
    dateFrom: null,
    dateTo: null,
  },
  activity: [],
  activitySummary: [],
};

const mutations = {
  setSearchQuery: (state, searchQuery) => {
    state.searchQuery = {
      ...state.searchQuery,
      ...searchQuery,
    };
  },
  setActivity: (state, activity) => {
    state.activity = activity;
  },
  setActivitySummary: (state, activitySummary) => {
    state.activitySummary = activitySummary;
  },
};

const actions = {
  async fetchActivitySummary({ commit }) {
    commit('setActivitySummary', []);
    const { data } = await axios.get('api/activity/summary');
    commit('setActivitySummary', data);
  },
  async fetchActivity({ commit, state }) {
    commit('setActivity', []);
    const { data } = await axios.get('api/activity', {
      params: state.searchQuery,
    });
    commit('setActivity', data);
  },
  async setSearchQuery({ commit }, query) {
    commit('setSearchQuery', query);
  },
  async addActivity(_, activity) {
    await axios.post('api/activity/add', activity);
  },
  async removeActivity({ dispatch }, id) {
    await axios.post(`api/activity/${id}/remove`);
    dispatch('fetchActivitySummary');
    dispatch('fetchActivity');
    dispatch('statistics/fetchDistributionChart', null, { root: true });
  },
};

const getters = {
  activitySummary: ({ activitySummary }) => activitySummary,
  activity: ({ activity }) => activity,
  searchQuery: ({ searchQuery }) => searchQuery,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
