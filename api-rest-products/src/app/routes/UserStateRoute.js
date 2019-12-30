const express = require('express');
const UserStateController = require('../controller/UserStateController');

const app = express();

app.get('/user-state',(req, res) => {
    UserStateController.find(req, res);
});

app.post('/user-state',(req, res) =>{
    UserStateController.create(req, res);
});

module.exports = app;