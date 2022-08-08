// Defining Category Schema using Mongoose
const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const productSchema = new Schema({
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Categories',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

// Creating a model and then eporting it
module.exports = mongoose.model('Products', productSchema);
