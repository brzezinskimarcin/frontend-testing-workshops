import { Router } from 'express';
import { expenses } from '../db/data.js';

const router = Router();

router.get('/', (req, res) => {
  const {
    categories,
    amountMin,
    amountMax,
    titleContains,
    dateFrom,
    dateTo
  } = req.query;

  let filtered = expenses;
  if (categories) {
    filtered = filtered.filter(({ category }) => categories.includes(category));
  }
  if (amountMin) {
    filtered = filtered.filter(({ value }) => +amountMin <= value);
  }
  if (amountMax) {
    filtered = filtered.filter(({ value }) => value <= +amountMax);
  }
  if (titleContains) {
    filtered = filtered.filter(({ title }) => title.includes(titleContains));
  }
  if (dateFrom) {
    filtered = filtered.filter(({ date }) => dateFrom <= date);
  }
  if (dateTo) {
    filtered = filtered.filter(({ date }) => date <= dateTo);
  }
  res.send(filtered.sort((a, b) => b.date - a.date));
});

router.get('/summary', (_, res) => {
  const now = Date.now();
  const lastMonth = new Date(now).setMonth(new Date(now).getMonth() - 1);
  const filtered = expenses.filter(({ date }) => lastMonth < date && date < now);
  res.send(filtered.sort((a, b) => b.date - a.date));
});

router.post('/add', (req, res) => {
  const id = Math.max(...expenses.map(({ id }) => id)) + 1;
  expenses.push({
    id,
    ...req.body,
  });
  res.sendStatus(200);
});

router.post('/:id/remove', (req, res) => {
  const index = expenses.findIndex(({ id }) => id === +req.params.id);
  expenses.splice(index, 1);
  res.sendStatus(200);
});

export default router;