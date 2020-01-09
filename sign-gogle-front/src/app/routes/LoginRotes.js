const express = require('express');
const LoginController = require('../controller/LoginController');

const app = express();

app.get('/', (req, res) => {
    LoginController.login(req, res);
});

module.exports = app;