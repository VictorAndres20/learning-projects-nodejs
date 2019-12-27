const User = require('../entity/User');

const create = (userInput) => {
    console.log("Repo entry");
    return new Promise((resolve, reject) => {
        let user = new User(userInput);
        user.save((err, userDB) => {
            if(err) reject(err);

            resolve(userDB);
        });
    });
}

module.exports = {
    create
}