const express = require('express');
const RenderController = require('../controller/RenderController');

const app = express();

app.get('/render/image/:image', (req, res) => {
    RenderController.renderImage(req, res);
});

module.exports = app;