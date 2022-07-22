import axios from 'axios';

const state = {
  distributionLoading: false,
  distribution: {},
  totalExpensesMonthlyLoading: false,
  totalExpensesMonthly: [],
  distributionMonthlyLoading: false,
  distributionMonthly: [],
};

const mutations = {
  setDistributionLoading: (state, distributionLoading) => {
    state.distributionLoading = distributionLoading;
  },
  setDistribution: (state, distribution) => {
    state.distribution = distribution;
  },
  setTotalExpensesMonthlyLoading: (state, totalExpensesMonthlyLoading) => {
    state.totalExpensesMonthlyLoading = totalExpensesMonthlyLoading;
  },
  setTotalExpensesMonthly: (state, totalExpensesMonthly) => {
    state.totalExpensesMonthly = totalExpensesMonthly;
  },
  setDistributionMonthlyLoading: (state, distributionMonthlyLoading) => {
    state.distributionMonthlyLoading = distributionMonthlyLoading;
  },
  setDistributionMonthly: (state, distributionMonthly) => {
    state.distributionMonthly = distributionMonthly;
  },
};

export const actions = {
  async fetchDistributionChart({ commit }) {
    commit('setDistributionLoading', true);
    commit('setDistribution', {});
    const { data } = await axios.get('api/statistics/distribution');
    commit('setDistribution', data);
    commit('setDistributionLoading', false);
  },
  async fetchTotalExpensesMonthlyChart({ commit }) {
    commit('setTotalExpensesMonthlyLoading', true);
    commit('setTotalExpensesMonthly', []);
    const { data } = await axios.get('api/statistics/total-expenses-monthly');
    commit('setTotalExpensesMonthly', data);
    commit('setTotalExpensesMonthlyLoading', false);
  },
  async fetchDistributionMonthlyChart({ commit }) {
    commit('setDistributionMonthlyLoading', true);
    commit('setDistributionMonthly', []);
    const { data } = await axios.get('api/statistics/distribution-monthly');
    commit('setDistributionMonthly', data);
    commit('setDistributionMonthlyLoading', false);
  },
};

export const getters = {
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
