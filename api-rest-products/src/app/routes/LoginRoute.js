const express = require('express');
const app = express();
const LoginController = require('../controller/LoginController');

app.post('/login',(req, res) => {
    LoginController.login(req, res);
});

module.exports = app;