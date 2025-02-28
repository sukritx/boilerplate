// server/routes/userRouter.ts
import { Router } from 'express';
import { getUsers } from '../controllers';

const router = Router();

router.get('/users', getUsers);

export default router;