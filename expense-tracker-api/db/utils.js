import { expenses } from './data.js';

export function groupExpensesByMonthAndCategory() {
  return expenses.reduce((memo, expense) => {
    const month = new Date(expense.date).getMonth();
    const category = expense.category;
    memo[month] = memo[month] || {};
    memo[month][category] = memo[month][category] || 0;
    memo[month][category] += expense.value;

    return memo;
  }, {});
}

export function aggregateCategories(data) {
  return data ? Object.values(data).reduce((sum, value) => sum + value, 0) : null;
}