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
    },
    state: {
        type: Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId("5e0a4378cbff7b3fc8e95c3b"),
        ref: 'UserState'
    }
});

module.exports = mongoose.model('User', userSchema);