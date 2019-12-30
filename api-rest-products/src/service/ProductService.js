const ProductRepo = require('../dal/repository/ProductRepo');
const UserService = require('./UserService');
const StringUtil = require('../util/StringUtil');
const ValidationHttpError = require('../error/ValidationHttpError');
const PageCalcUtil = require('../util/PageCalcUtil');

const create = async (input) => {
    verifyInput(input);
    await buildUser(input);
    let product = await ProductRepo.create(input);
    return product;
}

const find = async (page, limit) => {
    pageNew = PageCalcUtil.setPage(page);
    let products = await ProductRepo.findPaged(pageNew || 0, limit);
    let total = await count();
    let data = {
        products,
        total: PageCalcUtil.totalPages(total, limit),
        page: pageNew + 1,
    }
    return data;
}

const count = async () => {
    return await ProductRepo.count();
}

const verifyInput = (input) => {
    if(StringUtil.isBlank(input.name))
        throw new ValidationHttpError('Name is blank', 400);

    if(StringUtil.isBlank(input.user))
        throw new ValidationHttpError('User is blank', 400);
}

const buildUser = async (input) => {
    let user = await UserService.findByEmail(input.user);
    if(user == null)
        throw new ValidationHttpError('User not found', 404);
        
    input.user = user._id;
}

module.exports = {
    create,
    find
}