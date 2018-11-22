const mongoose = require('mongoose');

let user = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    isActive: {
        type: Boolean,
        default: true
    },
    createdOn: {
        type: Date,
        default: Date.now()
    } 
});

module.exports = mongoose.model('User', user); 