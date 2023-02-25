import { Router } from 'express';

import { idRules } from '../middlewares/index.js';
import { getProductByID, getProducts } from '../controllers/index.js';

const router = Router();

router.route('/').get(getProducts).post();

router.route('/:id').get(idRules('product'), getProductByID);

export default router;
