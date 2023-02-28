import { Router } from 'express';

import { login, renewJwt } from '../controllers/index.js';
import { loginRules, protectWithJwt } from '../middlewares/index.js';

const router = Router();

router.post('/login', loginRules(), login);

router.get('/renew', protectWithJwt, renewJwt);

export default router;
