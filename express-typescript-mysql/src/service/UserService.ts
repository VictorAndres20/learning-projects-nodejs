import UserRepository from '../dal/repository/UserRepository';

export default class UserService{

    private _userRepository: UserRepository;

    constructor(){
        this._userRepository = new UserRepository();
    }

    public async findAll(){
        return await this._userRepository.findAll();
    }

}