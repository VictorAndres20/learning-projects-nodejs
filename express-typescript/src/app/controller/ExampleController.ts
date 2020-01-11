import {Request, Response} from 'express';

class ExampleController{

    exampleFunction(req: Request, res: Response) {
        res.status(200).send("Hello my dear!!");
        /** If you have middleware body-parser */
        /*
        res.status(200).json({
            ok:true
        });
        */
    }
}

export default ExampleController;