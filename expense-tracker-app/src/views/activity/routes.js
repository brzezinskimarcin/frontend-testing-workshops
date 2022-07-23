import Dashboard from '@/src/views/activity/Dashboard.vue';
import AddExpense from '@/src/views/activity/AddExpense.vue';
import SetFilters from '@/src/views/activity/SetFilters.vue';

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
