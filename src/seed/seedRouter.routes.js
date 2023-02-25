import { Router } from 'express';

import { executeSeed } from './seeder.js';

const router = Router();

router.get('/', executeSeed);

export default router;
