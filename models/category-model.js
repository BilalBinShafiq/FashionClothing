// Defining Category Schema using Mongoose
const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

// Creating a model and then eporting it
module.exports = mongoose.model('Categories', categorySchema);
