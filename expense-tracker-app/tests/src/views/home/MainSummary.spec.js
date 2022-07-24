import axios from 'axios';
import {
  shallowMountExtended,
  waitForPromises,
  mockAxiosGetResponse,
} from '@/tests/utils';
import MainSummary from '@/src/views/home/MainSummary.vue';

describe('src/views/home/MainSummary.vue', () => {
  let wrapper;

  const createComponent = async (mockResponse) => {
    mockAxiosGetResponse(mockResponse);
    wrapper = shallowMountExtended(MainSummary);
    await waitForPromises();
  };
  const findTotalAmount = () => wrapper.findByRole('heading', { level: 2 });
  const findDifference = () => wrapper.findByRole('heading', { level: 5 });
  const findArrowIcon = () => wrapper.find('i');

  it('calls GET "api/summary" to retrieve data', () => {
    const response = { total: 0, difference: 0 };
    createComponent(response);
    expect(axios.get).toHaveBeenCalledWith('api/summary');
  });

  it('shows total amount', async () => {
    const response = { total: 1126.38, difference: 0 };
    await createComponent(response);
    expect(findTotalAmount().text()).toContain(response.total);
  });

  it('shows difference from previous month', async () => {
    const response = { total: 0, difference: -27.49 };
    await createComponent(response);
    expect(findDifference().text()).toContain(response.difference);
  });

  it('shows arrow down icon if difference is negative', async () => {
    const response = { total: 0, difference: -12.4 };
    await createComponent(response);
    expect(findArrowIcon().classes('el-icon-bottom')).toBe(true);
  });

  it('shows arrow up icon if difference is positive', async () => {
    const response = { total: 0, difference: 15.8 };
    await createComponent(response);
    expect(findArrowIcon().classes('el-icon-top')).toBe(true);
  });
});
