const UserStateService = require('../../service/UserStateService');

const find = (req, res) => {
    UserStateService.find()
    .then((states) =>{
        res.status(201).json({
            ok: true,
            msg: `States ${states.length}`,
            data: states
        });
    })
    .catch((err) =>{
        res.status(err.httpCode || 500).json({
            ok: false,
            msg: err.message
        });
    }); 
}

const create = (req, res) => {
    let userStateInput = req.body
    UserStateService.create(userStateInput)
    .then((data) =>{
        res.status(201).json({
            ok: true,
            msg: `Created`,
            data: data
        });
    })
    .catch((err) =>{
        res.status(err.httpCode || 500).json({
            ok: false,
            msg: err.message
        });
    }); 
}

module.exports = {
    find,
    create
}