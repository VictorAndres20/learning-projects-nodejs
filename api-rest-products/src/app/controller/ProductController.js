const ProductService = require('../../service/ProductService');

const create = (req, res) => {
    let body = req.body;
    ProductService.create(body)
    .then((product) => {
        res.status(201).json({
            ok:true,
            msg: 'Created',
            data: product
        });
    })
    .catch((err) => {
        res.status(err.httpCode || 500).json({
            ok: false,
            msg: err.message
        });
    });
}

const find = (req, res) => {
    let page = req.query.page;
    ProductService.find(Number(page), 4)
    .then((products) => {
        res.status(200).json({
            ok:true,
            data: products
        });
    })
    .catch((err) => {
        res.status(err.httpCode || 500).json({
            ok: false,
            msg: err.message
        });
    });
}

module.exports = {
    create,
    find
}