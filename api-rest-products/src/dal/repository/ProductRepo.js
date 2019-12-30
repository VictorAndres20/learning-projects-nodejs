const Product = require('../entity/Product');

const findPaged = (page, limit) => {
    let pageNew = page * limit;
    return new Promise((resolve, reject) => {
        Product.find({})
        .populate('user')
        .skip(pageNew)
        .limit(limit)
        .exec((err, products) => {
            if(err) reject(err);

            resolve(products);
        });
    });
}

const create = (productInput) => {
    let productCreate = new Product(productInput);
    return new Promise((resolve, reject) => {
        productCreate.save((err, productCreated) => {
            if(err) reject(err);

            resolve(productCreated);
        });
    });
}

const count = () => {
    return new Promise((resolve, reject) => {
        Product.countDocuments({})
        .exec((err, count) => {
            if(err) reject(err);

            resolve(count);
        });
    });
}

const findById = (id) => {
    return new Promise((resolve, reject) => {
        Product.findById(id, (err, product) => {
            if(err) reject(err);

            resolve(product);
        });
    });
}

module.exports = {
    findPaged,
    create,
    findById,
    count
}