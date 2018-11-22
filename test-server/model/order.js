const mongoose = require('mongoose');

let order = mongoose.Schema({
    userId: mongoose.SchemaTypes.ObjectId,
    productId: mongoose.SchemaTypes.ObjectId,
    productQuantity: String,
    total: String,
    description: String,
    createdOn: {
        type: Date,
        default: Date.now()
    } 
});

module.exports = mongoose.model('Order', order); 