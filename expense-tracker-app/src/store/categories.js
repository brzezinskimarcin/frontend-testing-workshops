import axios from 'axios';

const state = {
  categories: [],
};

const mutations = {
  setCategories: (state, categories) => {
    state.categories = categories;
  },
};

const actions = {
  async fetchCategories({ commit }) {
    commit('setCategories', []);
    const { data } = await axios.get('api/categories');
    commit('setCategories', data);
  },
};

const getters = {
  categories: ({ categories }) => categories,
  colors: ({ categories }) => categories.map(({ color }) => color),
  labels: ({ categories }) => categories.map(({ label }) => label),
  categoryData:
    ({ categories }) =>
    (categoryLabel) =>
      categories.find(({ label }) => label === categoryLabel),
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
