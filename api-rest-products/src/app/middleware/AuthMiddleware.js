const JWTUtil = require('../../util/JWTUtil');

const verifyToken = (req, res, next) => {

    /** Get HEADER Authorization */
    let token = req.get('Authorization');
    console.log(token);

    JWTUtil.verifyToken(token)
    .then((decoded) => {
        req.decoded = decoded;
        next();
    })
    .catch((err) => {
        res.status(401).json({
            ok: false,
            msg: err.message
        });
    });
}

module.exports = {
    verifyToken
}