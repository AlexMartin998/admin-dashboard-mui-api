console.clear();

import express from 'express';

import './db/db.js';
import { notFoundMiddleware, setupMiddlewares } from './middlewares/index.js';
import { clientsRoutes } from './routes/index.js';

// Initializations:
const app = express();

// Middlewares
setupMiddlewares(app);

// Routes
app.use('/clients', clientsRoutes);

app.use(notFoundMiddleware);

export default app;
