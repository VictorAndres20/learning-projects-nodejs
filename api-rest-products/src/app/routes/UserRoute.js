/**
 * Create all User routes
 */
const express = require('express');
const app = express();
const UserController = require('../controller/UserController');

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
    UserController.create(req,res);
});

app.put('/user/:id', (req, res) => {
    console.log(req.params.id);
    res.json('Put user');
});

app.delete('/user/:id', (req, res) => {
    console.log(req.params.id);
    res.json('Delete user');
});

module.exports = app;