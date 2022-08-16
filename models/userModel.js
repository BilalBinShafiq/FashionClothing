/* eslint-disable func-names, consistent-return */

const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    require: [true, 'Please provide a password'],
    minlength: 8,
    select: false, // it means this will now show up in the response
  },
  passwordConfirm: {
    type: String,
    reauire: [true, 'Please confirm your password'],
    validate: {
      // This works on CREATE and SAVE !!!
      validator(el) {
        return el === this.password;
      },
      message: 'Paswords are not the same!',
    },
  },
});

userSchema.pre('save', async function (next) {
  // Only run this functuon if password was actully modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete paswordConfirm field
  this.passwordConfirm = undefined;
  next();
});

// This will compare two passwords while login
userSchema.methods.comparePasswords = async function (
  candidatePassword,
  userPassword
) {
  const result = await bcrypt.compare(candidatePassword, userPassword);
  return result;
};

//

const user = mongoose.model('User', userSchema);

module.exports = user;
