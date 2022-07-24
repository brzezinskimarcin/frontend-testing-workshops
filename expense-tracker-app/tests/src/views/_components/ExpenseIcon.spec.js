import { shallowMountExtended, mockVuexStore } from '@/tests/utils';
import ExpenseIcon from '@/src/views/_components/ExpenseIcon.vue';

describe('src/views/_components/ExpenseIcon.vue', () => {
  let wrapper;

  const createComponent = (propsData, mockStore) => {
    wrapper = shallowMountExtended(ExpenseIcon, {
      propsData,
      mocks: {
        $store: mockVuexStore({ 'categories/categoryData': () => mockStore }),
      },
    });
  };
  const findIcon = () => wrapper.find('i');

  // it('matches snapshot', () => {
  //   const props = { category: 'Travel', selectable: false };
  //   const store = { color: 'rgb(0, 0, 0)', icon: 'el-icon-suitcase' };
  //   createComponent(props, store);
  //   expect(wrapper.html()).toMatchSnapshot();
  // });

  it('has colored background when not selectable', () => {
    const props = { category: 'Travel', selectable: false };
    const store = { color: 'rgb(0, 0, 0)', icon: 'el-icon-suitcase' };
    createComponent(props, store);
    expect(wrapper.element.style.background).toBe(store.color);
  });

  it('has colored background when selectable and active', () => {
    const props = { category: 'Travel', selectable: true, active: true };
    const store = { color: 'rgb(0, 0, 0)', icon: 'el-icon-suitcase' };
    createComponent(props, store);
    expect(wrapper.element.style.background).toBe(store.color);
  });

  it('has default background when selectable and not active', () => {
    const props = { category: 'Travel', selectable: true, active: false };
    const store = { color: 'rgb(0, 0, 0)', icon: 'el-icon-suitcase' };
    createComponent(props, store);
    expect(wrapper.element.style.background).toBe('');
  });

  it('has icon retrieved from the store', () => {
    const props = { category: 'Travel', selectable: true, active: false };
    const store = { color: 'rgb(0, 0, 0)', icon: 'el-icon-suitcase' };
    createComponent(props, store);
    expect(findIcon().classes(store.icon)).toBe(true);
  });

  it('does not emit "click" on click when "selectable" is false', async () => {
    const props = { category: 'Travel', selectable: false };
    const store = { color: 'rgb(0, 0, 0)', icon: 'el-icon-suitcase' };
    createComponent(props, store);
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBe(undefined);
  });

  it('emits "click" on click when "selectable" is true', async () => {
    const props = { category: 'Travel', selectable: true };
    const store = { color: 'rgb(0, 0, 0)', icon: 'el-icon-suitcase' };
    createComponent(props, store);
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
    expect(wrapper.emitted('click')[0]).toEqual([props.category]);
  });
});
