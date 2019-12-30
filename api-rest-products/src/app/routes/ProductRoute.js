const express = require('express');
const app = express();
const ProductController = require('../controller/ProductController');

app.post('/product',(req, res) => {
    ProductController.create(req, res);
});

app.get('/product/list', (req, res) => {
    ProductController.find(req, res);
})

module.exports = app;