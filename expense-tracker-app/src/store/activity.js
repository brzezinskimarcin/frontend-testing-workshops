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
  activityLoading: false,
  activity: [],
  activitySummaryLoading: false,
  activitySummary: [],
};

const mutations = {
  setSearchQuery: (state, searchQuery) => {
    state.searchQuery = {
      ...state.searchQuery,
      ...searchQuery,
    };
  },
  setActivityLoading: (state, activityLoading) => {
    state.activityLoading = activityLoading;
  },
  setActivity: (state, activity) => {
    state.activity = activity;
  },
  setActivitySummaryLoading: (state, activitySummaryLoading) => {
    state.activitySummaryLoading = activitySummaryLoading;
  },
  setActivitySummary: (state, activitySummary) => {
    state.activitySummary = activitySummary;
  },
};

export const actions = {
  async fetchActivitySummary({ commit }) {
    commit('setActivitySummaryLoading', true);
    commit('setActivitySummary', []);
    const { data } = await axios.get('api/activity/summary');
    commit('setActivitySummary', data);
    commit('setActivitySummaryLoading', false);
  },
  async fetchActivity({ commit, state }) {
    commit('setActivityLoading', true);
    commit('setActivity', []);
    const { data } = await axios.get('api/activity', {
      params: state.searchQuery,
    });
    commit('setActivity', data);
    commit('setActivityLoading', false);
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

export const getters = {
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
