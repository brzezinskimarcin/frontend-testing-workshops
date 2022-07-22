import axios from 'axios';

const state = {
  categoriesLoading: false,
  categories: [],
};

const mutations = {
  setCategoriesLoading: (state, categoriesLoading) => {
    state.categoriesLoading = categoriesLoading;
  },
  setCategories: (state, categories) => {
    state.categories = categories;
  },
};

export const actions = {
  async fetchCategories({ commit }) {
    commit('setCategoriesLoading', true);
    commit('setCategories', []);
    const { data } = await axios.get('api/categories');
    commit('setCategories', data);
    commit('setCategoriesLoading', false);
  },
};

export const getters = {
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
