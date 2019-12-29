require('../../server/config/config');
const UserService = require('../../service/UserService');

const create = (req, res) => {
    let body = req.body;
    UserService.create(body)
    .then((userDB) => {
        res.status(201).json({
            ok: true,
            msg: `User created ${userDB.name}`,
            data: userDB
        });
    })
    .catch((err) =>{
        res.status(err.httpCode || 500).json({
            msg: err.message
        });
    }); 
}

const findByIdAndUpdate = (req, res) => {
    let id = req.params.id;
    let body = req.body;
    UserService.findByIdAndUpdate(id,body)
    .then((userDB) => {
        res.status(201).json({
            msg: `User updated ${userDB.name}`,
            data: userDB
        });
    })
    .catch((err) =>{
        res.status(err.httpCode || 500).json({
            msg: err.message
        });
    }); 
}

const find = (req, res) => {
    let page = Number(req.query.page);
    let limit = Number(process.env.USERS_PAGE_LIMIT);
    UserService.find(page, limit)
    .then((data) => {
        res.status(200).json({
            msg: `Count users found ${data.users.length}`,
            data
        });
    })
    .catch((err) => {
        res.status(err.httpCode || 500).json({
            msg: err.message
        });
    });
}

module.exports = {
    create,
    findByIdAndUpdate,
    find
}