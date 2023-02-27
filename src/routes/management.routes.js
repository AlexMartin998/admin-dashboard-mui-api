import { Router } from 'express';

import { getAdmins } from '../controllers/index.js';

const router = Router();

router.get('/admins', getAdmins);

export default router;
