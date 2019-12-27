const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        require: [true, 'The name is needed']
    },
    email: {
        type: String,
        unique: true,
        require: [true, 'The email is needed']
    },
    pass: {
        type: String,
        require: [true, 'The pass is needed']
    },
    google: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', userSchema);