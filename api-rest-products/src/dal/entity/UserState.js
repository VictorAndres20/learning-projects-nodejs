const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userStateSchema = new Schema({
    name: {
        type: String,
        require: [true, 'The name is needed']
    }
});

module.exports = mongoose.model('UserState', userStateSchema);