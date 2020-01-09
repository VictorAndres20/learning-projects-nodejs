require('./config/config');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();

/** Middleware to parse body x-www-form-urlencoded */
app.use(bodyParser.urlencoded({extended: false}));

/** Middleware to parse body json */
app.use(bodyParser.json());

/** Middleware to serve static content*/
app.use( express.static(__dirname + '/../public'));

/** hbs Partials */
hbs.registerPartials(__dirname + '/../../views/partials');

/** hbs Helpers. Call this on HBS files */
hbs.registerHelper('getFooterDesc', require('../helpers/YearHelper'));

/** Express HBS engine */
app.set('view engine', 'hbs');

/** Routes */
app.use(require('../app/routes'));

const start = () => {
    return new Promise((resolve, reject) => {
        app.listen(process.env.PORT, (err) => {
            if(err) reject(err);

            resolve(`App listen ${process.env.PORT}`);
        } );
    });
}

const main = async () => {
    let started = await start();
    console.log(started);
}

module.exports = {
    main
}