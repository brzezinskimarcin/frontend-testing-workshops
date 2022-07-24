import axios from 'axios';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { mockAxiosGetResponse } from '@/tests/utils';
import categories from '@/src/store/modules/categories';

const colorsMock = ['#ff7801', '#e02cde'];
const labelsMock = ['Shopping', 'Restaurants'];
const iconsMock = ['el-icon-shopping-bag-2', 'el-icon-dish'];
const categoriesMock = Array.from({ length: 2 }).map((_, i) => ({
  color: colorsMock[i],
  label: labelsMock[i],
  icon: iconsMock[i],
}));

describe('src/store/categories.js', () => {
  let store;
  const createStore = () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store({
      modules: { categories },
    });
    mockAxiosGetResponse(categoriesMock);
  };

  it('is empty (initially)', () => {
    createStore();
    expect(store.getters['categories/categories']).toEqual([]);
  });

  it('calls GET "api/categories" when dispatching "fetchCategories" action', () => {
    createStore();
    store.dispatch('categories/fetchCategories');
    expect(axios.get).toHaveBeenCalledWith('api/categories');
  });

  it('returns categories for getter "categories"', async () => {
    createStore();
    await store.dispatch('categories/fetchCategories');
    expect(store.getters['categories/categories']).toEqual(categoriesMock);
  });

  it('returns colors for getter "colors"', async () => {
    createStore();
    await store.dispatch('categories/fetchCategories');
    expect(store.getters['categories/colors']).toEqual(colorsMock);
  });

  it('returns labels for getter "labels"', async () => {
    createStore();
    await store.dispatch('categories/fetchCategories');
    expect(store.getters['categories/labels']).toEqual(labelsMock);
  });

  it('returns correct category for getter "categoryData"', async () => {
    createStore();
    await store.dispatch('categories/fetchCategories');
    expect(store.getters['categories/categoryData']('Restaurants')).toEqual(
      categoriesMock[1],
    );
  });
});
