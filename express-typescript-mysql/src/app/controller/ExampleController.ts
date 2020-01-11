import {Request, Response} from 'express';
import UserService from '../../service/UserService';

class ExampleController{

    private _userService: UserService;

    constructor(){
        this._userService = new UserService();
    }

    public findAll(req: Request, res: Response) {
        this._userService.findAll()
        .then((result) => {
            res.status(200).json({
                ok:true,
                result
            });
        })
        .catch((err) => {
            res.status(500).json({
                ok:false,
                msg: err.message
            });
        });
    }
}

export default ExampleController;