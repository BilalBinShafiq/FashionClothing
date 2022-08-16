const mongoose = require('mongoose');

const { Schema } = mongoose;

// name, description, imageUrl

const categorySchema = new Schema({
  name: {
    type: String,
    require: [true, 'A category must have a name!'],
    trim: true,
    minlength: [
      3,
      'The minimum length of a name must be at least 3 characters.',
    ],
    maxLength: [
      50,
      'The maximum length of a name must be at most 200 characters.',
    ],
  },
  description: {
    type: String,
    required: [true, 'A category must have a description!'],
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
  imageUrl: {
    type: String,
    require: false,
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

const category = mongoose.model('Category', categorySchema);

module.exports = category;
