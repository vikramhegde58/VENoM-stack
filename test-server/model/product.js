const mongoose = require('mongoose');

let product = mongoose.Schema({
    model: String,
    type: String,
    brand: String,
    description: String,
    price: Number,
    createdOn: {
        type: Date,
        default: Date.now()
    } 
});

module.exports = mongoose.model('Product', product); 