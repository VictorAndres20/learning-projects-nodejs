const UserStateRepo = require('../dal/repository/UserStateRepo');
const StringUtil = require('../util/StringUtil');
const ValidationHttpError = require('../error/ValidationHttpError')

const find = async () => {
    return await UserStateRepo.find();
}

const create = async (input) => {
    validateInput(input);
    let userState = await UserStateRepo.create(input); 
    let data = {
        msg: 'Created',
        data: userState
    }
    return data;
}

const validateInput = (input) => {
    if(StringUtil.isBlank(input.name))
        throw new ValidationHttpError('Name is Blank', 400);

}

module.exports = {
    find,
    create
}