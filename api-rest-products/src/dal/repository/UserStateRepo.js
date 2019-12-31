const UserState = require('../entity/UserState');

const find = () => {
    return new Promise((resolve, reject) => {
        UserState.find((err, states) => {
            if(err) reject(err);

            resolve(states);
        });
    });
}

const findById = (id) => {
    return new Promise((resolve, reject) => {
        UserState.findById(id, (err, state) => {
            if(err) reject(err);

            resolve(state);
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
    create,
    findById
}