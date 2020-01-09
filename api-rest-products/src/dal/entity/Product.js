const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let productSchema = new Schema({
    name: {
        type: String,
        require: [true, 'Name is required']
    },
    description: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: [true, 'User ID reuqired']
    }
});

module.exports = mongoose.model('Product', productSchema);