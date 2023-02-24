import express from 'express';

import './db/db.js';
import { notFoundMiddleware, setupMiddlewares } from './middlewares/index.js';

// Initializations:
const app = express();

// Middlewares
setupMiddlewares(app);

// Routes
app.get('/', (_req, res) => {
  res.status(200).json({ msg: 'GET' });
});

app.use(notFoundMiddleware);

export default app;
