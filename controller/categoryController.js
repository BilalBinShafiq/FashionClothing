const Category = require('../models/categoryModel');

exports.getAllCategories = async (request, response) => {
  try {
    const allCategories = await Category.find();
    response.status(201).json({
      status: 'success',
      data: { category: allCategories },
    });
  } catch (err) {
    response.status(400).json({
      status: 'error',
      message: err,
    });
  }
};

exports.createCategory = async (request, response) => {
  try {
    const newCategory = await Category.create(request.body);
    response.status(201).json({
      status: 'success',
      data: { category: newCategory },
    });
  } catch (err) {
    response.status(400).json({
      status: 'error',
      message: err,
    });
  }
};

exports.getCategory = (request, response) => {
  response.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

exports.updateCategory = (request, response) => {
  response.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

exports.deleteCategory = (request, response) => {
  response.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};
