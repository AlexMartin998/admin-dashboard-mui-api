import { Router } from 'express';

import { getDashboardStats } from '../controllers/index.js';

const router = Router();

router.get('/dashboard', getDashboardStats);

export default router;
