const express = require('express');

const app = express();

app.use(require('./UploadRoute'));
app.use(require('./RenderRoute'));

module.exports = app;