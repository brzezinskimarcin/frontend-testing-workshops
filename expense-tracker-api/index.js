import express from 'express';
import cors from 'cors';
import activity from './routes/activity.js';
import categories from './routes/categories.js';
import statistics from './routes/statistics.js';
import summary from './routes/summary.js';

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(
  cors({
    exposedHeaders: ['Content-Disposition'],
  }),
);
app.use(express.json());
app.use('/activity', activity);
app.use('/categories', categories);
app.use('/statistics', statistics);
app.use('/summary', summary);

app.listen(PORT, HOST, () => {
  console.log(`Server is running at https://${HOST}:${PORT}`);
});
