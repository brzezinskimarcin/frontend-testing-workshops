import { Router } from 'express';
import { groupExpensesByMonthAndCategory, aggregateCategories } from '../db/utils.js';

const router = Router();

router.get('/', (_, res) => {
  const grouped = groupExpensesByMonthAndCategory();

  const currentMonth = new Date(Date.now()).getMonth();
  const currentTotal = aggregateCategories(grouped[currentMonth]);

  const previousMonth = currentMonth - 1;
  const previousTotal = aggregateCategories(grouped[previousMonth]);

  const difference = previousTotal ? ((currentTotal - previousTotal) / previousTotal * 100) : null;

  res.send({
    total: currentTotal,
    difference
  });
});

export default router;