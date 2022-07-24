import { nextTick } from 'vue';
import axios from 'axios';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import * as testingLibrary from '@testing-library/dom';
import {
  createLocalVue,
  mount,
  shallowMount,
  createWrapper,
} from '@vue/test-utils';
import { filters } from '@/src/filters';
import { modules } from '@/src/store/modules';

const initLocalVue = () => {
  const localVue = createLocalVue();
  localVue.use(ElementUI, { locale });
  Object.keys(filters).forEach((filterName) => {
    localVue.filter(filterName, (value) => `${value} | ${filterName}`);
  });

  return localVue;
};

const generateAdditionalQueries = (wrapper) => {
  const queries = ['findByRole', 'findByText', 'findByPlaceholderText'];
  return queries.reduce(
    (memo, query) => ({
      ...memo,
      [query]: {
        value: (text, options = {}) => {
          const modifiedQuery = query.replace('find', 'query');
          const element = testingLibrary[modifiedQuery](
            wrapper.element,
            text,
            options,
          );
          return createWrapper(element, this.options);
        },
      },
    }),
    {
      emitFromChild: {
        value: async (child, event, args) => {
          child.vm.$emit(event, args);
          await nextTick();
        },
      },
    },
  );
};

const extendWrapper = (wrapperFunc) => (component, options) => {
  const localVue = initLocalVue();
  const wrapper = wrapperFunc(component, {
    localVue,
    ...options,
  });
  const additionalQueries = generateAdditionalQueries(wrapper);

  return Object.defineProperties(wrapper, additionalQueries);
};

export const mountExtended = extendWrapper(mount);
export const shallowMountExtended = extendWrapper(shallowMount);

export const waitForPromises = () =>
  new Promise((resolve) => {
    requestAnimationFrame(resolve);
  });

export const mockAxiosGetResponse = (data) => {
  axios.get = vi.fn(() => Promise.resolve({ data }));
};

export const mockVuexStore = (getters, dispatch = () => {}) => {
  const _modulesNamespaceMap = Object.keys(modules).reduce(
    (memo, module) => ({
      ...memo,
      [`${module}/`]: { context: { dispatch } },
    }),
    {},
  );

  return {
    _modulesNamespaceMap,
    getters,
  };
};
