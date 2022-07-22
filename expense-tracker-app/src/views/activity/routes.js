import Dashboard from '@/views/activity/Dashboard.vue';
import AddExpense from '@/views/activity/AddExpense.vue';
import SetFilters from '@/views/activity/SetFilters.vue';

export default [
  {
    path: '',
    name: 'Activity',
    component: Dashboard,
  },
  {
    path: 'add-expense',
    name: 'Add Expense',
    component: AddExpense,
  },
  {
    path: 'set-filters',
    name: 'Set Filters',
    component: SetFilters,
  },
];
