const LoginService = require('../../service/LoginService');

const login = (req, res) => {
    let body = req.body;
    LoginService.login(body)
    .then((user) => {
        res.status(200).json({
            ok: true,
            msg: `Success. Welcome ${user.name}`,
            data: user
        });
    })
    .catch((err) => {
        res.status(err.httpCode || 500).json({
            ok: false,
            msg: err.message
        });
    });
}

module.exports = {
    login
}