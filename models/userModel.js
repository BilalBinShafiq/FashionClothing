const mongoose = require('mongoose');
const validator = require('validator');

// name, email, photo, password, passwordConfirm

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please tell your name!'],
  },
  email: {
    type: String,
    require: [true, 'Please provide your email'],
    unique: true,
    lovercase: true,
    validator: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    require: [true, 'Please provide a password'],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    reauire: [true, 'Please confirm your password'],
  },
});

const user = mongoose.model('User', userSchema);

module.exports = user;
