require('./config/Config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/** ROUTES */
app.use(require('../app/routes'));

/** Listen function */
const listen = () => {
    /** Start Server */
    return new Promise((resolve, reject) => {
        app.listen(process.env.PORT, (err) => {
            if(err) reject(err);

            resolve("Listen port " + process.env.PORT);
        });
    });
}

/** Start Function */
const main = async () => {
    let server = await listen();
    console.log(server);
}

module.exports = {
    main
}