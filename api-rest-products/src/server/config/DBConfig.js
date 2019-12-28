const mongoose = require('mongoose');

const connect = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(`${process.env.DB_PROTOCOL}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
            { useNewUrlParser: true, useUnifiedTopology: true },(err, res) => {
            if(err) reject(err);

            resolve(`Mongo db connection stablished`);
        });
    });
}

module.exports = {
    connect
}