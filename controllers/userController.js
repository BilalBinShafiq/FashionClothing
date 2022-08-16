/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (request, response, next) => {
  const allUsers = await User.find();

  // SEND RESPONSE
  response.status(200).json({
    status: 'success',
    results: allUsers.length,
    data: {
      user: allUsers,
    },
  });
});
exports.createUser = (request, response) => {
  response.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

exports.getUser = (request, response) => {
  response.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

exports.updateUser = (request, response) => {
  response.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

exports.deleteUser = (request, response) => {
  response.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};
