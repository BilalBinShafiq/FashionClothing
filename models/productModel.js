const mongoose = require('mongoose');

// name, price, shortDescription, longDescription, imageURL

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A product must have a name!'],
  },
  price: {
    type: Number,
    require: [true, 'A product must have a price!'],
  },
});

const product = mongoose.model('Product', productSchema);

module.exports = product;
