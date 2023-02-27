import { Router } from 'express';

import { getSales } from '../controllers/index.js';

const router = Router();

router.get('/', getSales);

export default router;
