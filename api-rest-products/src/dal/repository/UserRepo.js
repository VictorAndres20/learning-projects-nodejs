const User = require('../entity/User');

const create = (userInput) => {
    return new Promise((resolve, reject) => {
        let user = new User(userInput);
        user.save((err, userDB) => {
            if(err) reject(err);

            resolve(userDB);
        });
    });
}

const count = () => {
    return new Promise((resolve, reject) => {
        User.countDocuments({}).exec((err, count) => {
            if(err) reject(err);

            resolve(count);
        });
    });
}

const find = () => {
    return new Promise((resolve, reject) => {
        User.find({})
        .populate('state')
        .exec((err, users) => {
            if(err) reject(err);

            resolve(users);
        });
    });
}

const findOne = (query) => {
    return new Promise((resolve, reject) => {
        User.findOne(query, (err, user) => {
            if(err) reject(err);

            resolve(user);
        });
    });
}

const findPaged = (page, limit) => {
    page = limit * page;
    return new Promise((resolve, reject) => {
        User.find({})
        .populate('state')
        .skip(page)
        .limit(limit)
        .sort('name')
        //.sort('-name') // sort DESC
        .exec((err, users) => {
            if(err) reject(err);

            resolve(users);
        });
    });
}

const findById = (id) => {
    return new Promise((resolve, reject) => {
        User.findById(id, (err, userDB) => {
            if(err) reject(err);

            resolve(userDB);
        });
    });
}

const findByIdAndUpdate = (id, userInput) => {
    return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(id, userInput, {new:true, runValidators: true}, (err, userDB) => {
            if(err) reject(err);

            resolve(userDB);
        });
    });
}

module.exports = {
    create,
    findById,
    findByIdAndUpdate,
    find,
    findPaged,
    count,
    findOne
}