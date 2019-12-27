const UserRepo = require('../dal/repository/UserRepo');

const create = async (userInput) => {
    if(userInput.name === null || userInput.name === "")
        throw new Error({codeHttp:404,msg:"Nombre vacío"});
    
    return await UserRepo.create(userInput);
}

module.exports = {
    create
}