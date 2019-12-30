/**
 * Create all User routes
 */
const express = require('express');
const app = express();
const UserController = require('../controller/UserController');
const AuthMiddelware = require('../middleware/AuthMiddleware');

app.get('/user/list', [AuthMiddelware.verifyToken], (req, res) => {
    UserController.find(req, res);
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

app.put('/user/:id', [AuthMiddelware.verifyToken] ,(req, res) => {
    UserController.findByIdAndUpdate(req, res);
});

app.delete('/user/:id', (req, res) => {
    console.log(req.params.id);
    res.json('Delete user');
});

module.exports = app;