import { Router } from 'express';

import { getUserById } from '../controllers/index.js';
import { userIdRules } from '../middlewares/index.js';

const router = Router();

router.route('/:id').get(userIdRules(), getUserById);

export default router;
