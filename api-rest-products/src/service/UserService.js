const UserRepo = require('../dal/repository/UserRepo');
const UserStateService = require('../service/UserStateService');
const ValidationHttpError = require('../error/ValidationHttpError');
const StringUtil = require('../util/StringUtil');
const _ = require('underscore');
const PageCalcUtil = require('../util/PageCalcUtil');
const EncryptUtil = require('../util/EncryptUtil');

const create = async (userInput) => {
    validateUser(userInput);

    await buildState(userInput);

    if(StringUtil.isBlank(userInput.pass))
        throw new ValidationHttpError("Password is blank", 400);
    
    encryptPassword(userInput);

    return await UserRepo.create(userInput);
}

const findByIdAndUpdate = async (id, userInput) => {
    validateUser(userInput);
    userInput = buildUserUpdate(userInput);
    return await UserRepo.findByIdAndUpdate(id, userInput);
}

const find = async (page, limit) => {
    page = PageCalcUtil.setPage(page);
    let users = await UserRepo.findPaged(page || 0, limit);
    let total = await count();
    let data = {
        users,
        total: PageCalcUtil.totalPages(total, limit),
        page: page + 1,
    }
    return data;
}

const findByEmail = async (email) => {
    return await UserRepo.findOne({email});
}

const count = async () => {
    return await UserRepo.count();
}

const validateUser = (userInput) => {
    if(StringUtil.isBlank(userInput.name))
        throw new ValidationHttpError("Name is blank", 400);

    if(StringUtil.isBlank(userInput.email))
        throw new ValidationHttpError("Email is blank", 400);
}

const buildState = async (userInput) => {
    if(! StringUtil.isBlank(userInput.state)){
        let state = await UserStateService.findById(userInput.state);
        if(state == null)
            throw new ValidationHttpError("State not found", 404);

        delete userInput.state;
    }
}

const buildUserUpdate = (userInput) => {
    return _.pick(userInput, ["name", "email", "google"]);
}

const encryptPassword = (userInput) => {
    userInput.pass = EncryptUtil.bcryptEncryption(userInput.pass);
}

module.exports = {
    create,
    findByIdAndUpdate,
    find,
    count,
    findByEmail
}