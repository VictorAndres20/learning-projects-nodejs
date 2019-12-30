const UserState = require('../entity/UserState');

const find = () => {
    return new Promise((resolve, reject) => {
        UserState.find((err, states) => {
            if(err) reject(err);

            resolve(states);
        });
    });
}

const create = (userStateInput) => {
    return new Promise((resolve, reject) => {
        let userState = new UserState(userStateInput);
        userState.save((err, userStateCreated) => {
            if(err) reject(err);

            resolve(userStateCreated);
        });
    });
}

module.exports = {
    find,
    create
}