const GoogleService = require('../service/GoogleService');

const auth = (req, res) => {
    let token = req.body.idtoken;
    GoogleService.verify(token)
    .then((payload) => {
        res.status(200).json({
            ok: true,
            data:payload
        });
    })
    .catch((err) => {
        res.status(401).json({
            ok: false,
            msg:err.message
        });
    });
}

module.exports = {
    auth
}