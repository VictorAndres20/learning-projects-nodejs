const express = require('express');
const GoogleController = require('../controller/GoogleController');

const app = express();

app.post('/google', (req, res) => {
    GoogleController.auth(req, res);
});

module.exports = app;