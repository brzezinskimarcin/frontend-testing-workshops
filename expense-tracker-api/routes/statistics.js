import { Router } from 'express';
import { categories } from '../db/data.js';
import { groupExpensesByMonthAndCategory, aggregateCategories } from '../db/utils.js';

const router = Router();
router.get('/distribution', (_, res) => {
  const grouped = groupExpensesByMonthAndCategory();
  const currentMonth = new Date(Date.now()).getMonth();
  res.send(grouped[currentMonth]);
});

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
router.get('/total-expenses-monthly', (_, res) => {
  const grouped = groupExpensesByMonthAndCategory();
  const numberOfMonths = 5;
  const currentMonth = new Date(Date.now()).getMonth();
  const months = Array.from({ length: numberOfMonths + 1 }).map((_, i) => {
    const month = (12 + currentMonth - numberOfMonths + i) % 12;
    return {
      label: monthLabels[month],
      data: {
        value: aggregateCategories(grouped[month]) || 0,
      },
    };
  });
  res.send(months);
});

router.get('/distribution-monthly', (_, res) => {
  const grouped = groupExpensesByMonthAndCategory();
  const numberOfMonths = 5;
  const currentMonth = new Date(Date.now()).getMonth();
  const months = Array.from({ length: numberOfMonths + 1 }).map((_, i) => {
    const month = (12 + currentMonth - numberOfMonths + i) % 12;
    return {
      label: monthLabels[month],
      data: {
        ...categories.reduce((memo, category) => ({
          ...memo,
          [category.label]: 0,
        }), {}),
        ...grouped[month],
      },
    };
  });
  res.send(months);
});

export default router;