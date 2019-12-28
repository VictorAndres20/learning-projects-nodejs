const bcrypt = require('bcryptjs');

const bcryptEncryption = (text) => {
    let salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(text,salt);
}

const bcryptCompare = (plainText, hashText) => {
    return bcrypt.compareSync(plainText, hashText);
}

module.exports = {
    bcryptEncryption,
    bcryptCompare
}