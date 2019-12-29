/**
 * API Starter Server file
 */
require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('../app/routes/UserRoute');
const DBConfig = require('./config/DBConfig');
const app = express();

/** Middleware to parse body x-www-form-urlencoded */
app.use(bodyParser.urlencoded({extended: false}));

/** Middleware to parse body json */
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
    let db = await DBConfig.connect();
    console.log(db);
    let server = await listen();
    console.log(server);
}

module.exports = {
    main
}