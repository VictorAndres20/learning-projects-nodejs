const express = require('express');
const expressFileUpload = require('express-fileupload');
const UploadController = require('../controller/UploadController');

const app = express();

app.use(expressFileUpload());

app.post('/upload/image', (req, res) => {
    UploadController.uploadImage(req, res);
});

module.exports = app;