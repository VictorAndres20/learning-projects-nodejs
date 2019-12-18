/**
 * Main Entry app
 */
require('../config/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/** Middleware to parse body x-www-form-urlencoded */
app.use(bodyParser.urlencoded({extended: false}));

/** Middleware to parse body json */
app.use(bodyParser.json());

app.get('/user/list', (req, res) => {
    res.json({
        msg: 'Get User'
    });
});

app.get('/user/id/:id', (req, res) => {
    console.log(req.params.id);
    res.json({
        data: `${id} id del usuario`
    });
});

app.post('/user', (req, res) => {
    let body = req.body; // This thanks body-parser
    console.log(body.name); 
    res.status(201).json({
        msg: 'Post User'
    });
});

app.put('/user/:id', (req, res) => {
    console.log(req.params.id);
    res.json('Put user');
});

app.delete('/user/:id', (req, res) => {
    console.log(req.params.id);
    res.json('Delete user');
});

app.listen(process.env.PORT, () => {
    console.log("Listen port " + process.env.PORT);    
});