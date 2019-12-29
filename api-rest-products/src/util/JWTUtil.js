require('../server/config/config');
const jwt = require('jsonwebtoken');

const generateJWT = (content) => {
    return jwt.sign({
        content
    }, process.env.JWT_SECRET, { expiresIn: Number(process.env.JWT_EXPIRES)});
}

const verifyToken = (token) => {
    return new Promise((resolve , reject) => {
        if(! token.startsWith('Bearer '))
            throw new Error("Invalid HEADER prefix");
        jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err, decoded) => {
            if(err) reject(err);

            resolve(decoded);
        });
    });
}

module.exports = {
    generateJWT,
    verifyToken
}