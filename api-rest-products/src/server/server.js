/**
 * API MAIN file
 */
require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('../app/routes/UserRoute');

const app = express();

/** Middleware to parse body x-www-form-urlencoded */
app.use(bodyParser.urlencoded({extended: false}));

/** Middleware to parse body json */
app.use(bodyParser.json());

/** User ROUTES */
app.use(userRoute);

// All other routes here

/** Connect to MongoDB */
mongoose.connect('mongodb://localhost:27017/products', (err, res) => {
    if(err) throw err;

    console.log("Mongo db connection stablished");
});

/** Start Server */
app.listen(process.env.PORT, () => {
    console.log("Listen port " + process.env.PORT);
});