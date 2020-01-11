import {Router, Request, Response} from 'express';
import ExampleController from '../controller/ExampleController';

const exampleController = new ExampleController();
const router = Router();

router.get('/',(req: Request, res: Response) => {
    exampleController.findAll(req, res);
});

export default router;