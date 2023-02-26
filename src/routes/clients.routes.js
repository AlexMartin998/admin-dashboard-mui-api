import { Router } from 'express';

import {
  getUserById,
  getCustomers,
  getTransactions,
} from '../controllers/index.js';
import { idRules } from '../middlewares/index.js';

const router = Router();

router.get('/customers', getCustomers);
router.get('/transactions', getTransactions);

router.route('/:id').get(idRules('user'), getUserById);

export default router;
