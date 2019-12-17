/**
 * Express server
 */
const express = require('express');
/** Create app express */
const app = express();

const hbs = require('hbs');

/** Middleware to serve static content*/
app.use( express.static(__dirname + '/public'));

/** hbs Partials */
hbs.registerPartials(__dirname + '/views/partials/');
hbs.registerPartials(__dirname + '/views/partials/app-bars');
/** Express HBS engine */
app.set('view engine', 'hbs');

/** hbs Helpers. Call this on HBS files */
hbs.registerHelper('getFooterDesc', () => {
    return 'This is my footer from helper, use this on footer.hbs';
})

/** ROUTES */
app.get('/',(req, res) => {
    res.render('home',{
        name: 'Victor', //Render variable name on home.hbs file
        year: new Date().getFullYear() //Render variable year, that can be a partial, on home.hbs file
    });
})

/** Listen Port */
app.listen(8000, () => {
    console.log("Server Started. Listen on 8000");
});