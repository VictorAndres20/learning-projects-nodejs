class UserRepo{
    constructor(){
        this.fileHandler = require('../FileHandler').buildClass('users.json');
    }

    save = (data) => {
        this.fileHandler.writeFileSync(data);
        return data;
    }

    find = () => {
        return this.fileHandler.readFileSync();
    }
}

const buildClass = () => {
    return new UserRepo();
}

module.exports = {buildClass};