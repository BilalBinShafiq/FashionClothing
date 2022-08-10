const mongoose = require('mongoose');

const { Schema } = mongoose;

// name, description, imageUrl

const categorySchema = new Schema({
  name: {
    type: String,
    require: [true, 'A category must have a name!'],
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
    require: false,
  },
});

const category = mongoose.model('Category', categorySchema);

module.exports = category;
