import { Router } from 'express';

import { getUserById } from '../controllers/index.js';
import { idRules } from '../middlewares/index.js';

const router = Router();

router.route('/:id').get(idRules('user'), getUserById);

export default router;
