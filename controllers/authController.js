/* eslint-disable consistent-return, no-unused-vars, no-underscore-dangle */

const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

exports.signup = catchAsync(async (request, response, next) => {
  const newUser = await User.create(request.body);

  // const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
  //   expiresIn: process.env.JWT_EXPIRES_IN,
  // });

  const token = signToken(newUser._id);

  response.status(200).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (request, response, next) => {
  const { email, password } = request.body;

  // 1) Check if the email and password exists
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 404));
  }
  // 2) Check if user exists and password is correct
  const user = await User.findOne({ email }).select('+password');
  // const comparePasswords = await user.comparePasswords(password, user.password);
  // if (!user || !comparePasswords) {

  if (!user || !(await user.comparePasswords(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }
  // 3) If everything ok, send token to client
  const token = signToken(user._id);

  response.status(200).json({
    status: 'success',
    token,
  });
});

exports.protect = catchAsync(async (request, response, next) => {
  let token;
  // 1) Getting token and checks it it's there
  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith('Bearer ')
  ) {
    // eslint-disable-next-line prefer-destructuring
    token = request.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError('You are not logged in please log in to get access', 401)
    );
  }
  console.log(token);
  // 2) Varification token

  // 3) Check if user still exists

  // 4) Check if user changed password after the token was issued
  next();
});
