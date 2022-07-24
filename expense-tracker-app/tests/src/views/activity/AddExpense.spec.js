import { mountExtended, mockVuexStore } from '@/tests/utils';
import AddExpense from '@/src/views/activity/AddExpense.vue';

const date = '2022-07-10';
beforeAll(() => {
  Date.now = vi.fn(() => Date.parse(date));
});

describe('src/views/activity/AddExpense.vue', () => {
  let wrapper;

  const labelsMock = ['Shopping', 'Restaurants'];
  const dispatch = vi.fn();
  const back = vi.fn();
  const createComponent = () => {
    wrapper = mountExtended(AddExpense, {
      mocks: {
        $store: mockVuexStore({ 'categories/labels': labelsMock }, dispatch),
        $router: { back },
      },
      stubs: ['expense-icon'],
    });
  };
  const findCategory = (i) =>
    wrapper.findAllComponents('expense-icon-stub').at(i);
  const findTitleInput = () => wrapper.findByPlaceholderText('Insert title');
  const findAmountInput = () => wrapper.findByPlaceholderText('Insert amount');
  const findDatePicker = () => wrapper.findByPlaceholderText('Pick a day');
  const findSaveButton = () => wrapper.findByRole('button', { name: 'Save' });
  const findErrorMessage = () => wrapper.findByText('This field is required');

  it('has first category active', () => {
    createComponent();
    const category = findCategory(0);
    expect(category.props('active')).toBe(true);
  });

  it('selecting another category makes its active', async () => {
    createComponent();
    const category = findCategory(1);
    await wrapper.emitFromChild(category, 'click');
    expect(category.props('active')).toBe(true);
  });

  it('has today date selected as default', () => {
    createComponent();
    expect(findDatePicker().element.value).toBe(date);
  });

  it('is impossible to enter string as amount', async () => {
    createComponent();
    const amountInput = findAmountInput();
    await amountInput.setValue('abcd');
    expect(amountInput.element.value).toBe('');
  });

  it('shows error message when submitting without amount', async () => {
    createComponent();
    await findTitleInput().setValue('title');
    await findSaveButton().trigger('click');
    expect(findErrorMessage().exists()).toBe(true);
  });

  it('shows error message when submitting without title', async () => {
    createComponent();
    await findAmountInput().setValue(5);
    await findSaveButton().trigger('click');
    expect(findErrorMessage().exists()).toBe(true);
  });

  it('calls "addActivity" action when submitting with all fields', async () => {
    createComponent();
    const category = findCategory(0).props('category');
    const title = 'title';
    const value = 5;
    await findTitleInput().setValue(title);
    await findAmountInput().setValue(value);
    await findSaveButton().trigger('click');
    expect(dispatch).toHaveBeenCalledWith('addActivity', {
      category,
      title,
      value,
      date: Date.now(),
    });
    expect(back).toHaveBeenCalled();
  });
});
