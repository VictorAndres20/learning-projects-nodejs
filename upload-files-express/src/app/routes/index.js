const express = require('express');

const app = express();

app.use(require('./UploadRoute'));

module.exports = app;