import axios from 'axios';

const state = {
  distribution: {},
  totalExpensesMonthly: [],
  distributionMonthly: [],
};

const mutations = {
  setDistribution: (state, distribution) => {
    state.distribution = distribution;
  },
  setTotalExpensesMonthly: (state, totalExpensesMonthly) => {
    state.totalExpensesMonthly = totalExpensesMonthly;
  },
  setDistributionMonthly: (state, distributionMonthly) => {
    state.distributionMonthly = distributionMonthly;
  },
};

const actions = {
  async fetchDistributionChart({ commit }) {
    commit('setDistribution', {});
    const { data } = await axios.get('api/statistics/distribution');
    commit('setDistribution', data);
  },
  async fetchTotalExpensesMonthlyChart({ commit }) {
    commit('setTotalExpensesMonthly', []);
    const { data } = await axios.get('api/statistics/total-expenses-monthly');
    commit('setTotalExpensesMonthly', data);
  },
  async fetchDistributionMonthlyChart({ commit }) {
    commit('setDistributionMonthly', []);
    const { data } = await axios.get('api/statistics/distribution-monthly');
    commit('setDistributionMonthly', data);
  },
};

const getters = {
  distribution: ({ distribution }) => distribution,
  totalExpensesMonthly: ({ totalExpensesMonthly }) => totalExpensesMonthly,
  distributionMonthly: ({ distributionMonthly }) => distributionMonthly,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
