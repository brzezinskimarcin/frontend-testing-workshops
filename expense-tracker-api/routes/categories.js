import { Router } from 'express';
import { categories } from '../db/data.js';

const router = Router();

router.get('/', (_, res) => {
  res.send(categories);
});

export default router;