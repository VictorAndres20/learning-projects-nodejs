const UserService = require('../../service/UserService');

const create = (req, res) => {
    let body = req.body;
    console.log(body.name);
    UserService.create(body)
    .then((userDB) => {
        res.status(201).json({
            msg: `User created ${userDB.name}`
        });
    })
    .catch((err) =>{
        res.status(err.message.codeHttp ? err.message.codeHttp : 500).json({
            msg: err.message.msg ? err.message.msg : err.message
        });
    }); 
}

module.exports = {
    create
}