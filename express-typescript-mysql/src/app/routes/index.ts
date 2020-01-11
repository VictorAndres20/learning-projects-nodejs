import {Router} from 'express';
import exampleRouter from './exampleRoutes';

const router = Router();

router.use(exampleRouter);

export default router;