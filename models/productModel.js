const mongoose = require('mongoose');

const { Schema } = mongoose;
// name, price, shortDescription, longDescription, imageURL

const productSchema = new Schema({
  name: {
    type: String,
    require: [true, 'A product must have a name!'],
    trim: true,
    minlength: [
      5,
      'The minimum length of a name must be at least 5 characters.',
    ],
    maxLength: [
      50,
      'The maximum length of a name must be at most 200 characters.',
    ],
  },
  price: {
    type: Number,
    require: [true, 'A product must have a price!'],
  },
  description: {
    type: String,
    required: [true, 'A product must have a description!'],
    trim: true,
    minlength: [
      10,
      'The minimum length of a description must be at least 10 characters.',
    ],
    maxLength: [
      200,
      'The maximum length of a description must be at most 200 characters.',
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const product = mongoose.model('Product', productSchema);

module.exports = product;
