const UserService = require('./UserService');
const ValidationHttpError = require('../error/ValidationHttpError');
const EncryptUtil = require('../util/EncryptUtil');
const StringUtil = require('../util/StringUtil');
const JWTUtil = require('../util/JWTUtil');

const login = async (credentials) => {
    validateInputs(credentials);
    let email = credentials.email;
    let user = await UserService.findByEmail(email);
    if(! user)
        throw new ValidationHttpError(`Doesn't exist user ${email}`, 404);

    validatePassword(credentials.pass, user);

    let data = {
        user,
        token: JWTUtil.generateJWT(user)
    }    

    return data;
}

const validateInputs = (credentials) => {
    if(StringUtil.isBlank(credentials.email))
        throw new ValidationHttpError(`Email is blank`, 400);

    if(StringUtil.isBlank(credentials.pass))
        throw new ValidationHttpError(`Password is blank`, 400);

}

const validatePassword = (password, user) => {
    if(! EncryptUtil.bcryptCompare(password, user.pass))
        throw new ValidationHttpError(`Incorrect password`, 400);
}

module.exports = {
    login
}