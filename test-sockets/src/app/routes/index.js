const express = require('express');

const app = express();

app.use(require('./HtmlRoute'));

module.exports = app;