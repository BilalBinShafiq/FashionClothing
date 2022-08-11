/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const Category = require('../models/categoryModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllCategories = catchAsync(async (request, response, next) => {
  // BUILD QUERY
  const queryObj = { ...request.query };
  const excludeFields = ['page', 'sort', 'limit', 'fields'];
  excludeFields.forEach((el) => delete queryObj[el]);

  const query = Category.find(queryObj);

  // EXECUTE QUERY
  const allCategories = await query;

  // SEND RESPONSE
  response.status(200).json({
    status: 'success',
    data: { category: allCategories },
  });
});

exports.createCategory = catchAsync(async (request, response, next) => {
  const newCategory = await Category.create(request.body);
  response.status(200).json({
    status: 'success',
    data: { category: newCategory },
  });
});

exports.getCategory = catchAsync(async (request, response, next) => {
  const category = await Category.findById(request.params.id);

  if (!category) {
    return next(new AppError(`No category found wih id`, 404));
  }

  response.status(200).json({
    status: 'success',
    data: { category },
  });
});

exports.updateCategory = catchAsync(async (request, response, next) => {
  // new will return the modified category rather than the original
  // runvalidators will update validators validate the update operation against the model schema

  const category = await Category.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!category) {
    return next(
      new AppError(`No category found wih id ${request.params.id}`, 404)
    );
  }

  response.status(200).json({
    status: 'success',
    data: { category },
  });
});

exports.deleteCategory = catchAsync(async (request, response, next) => {
  const category = await Category.findByIdAndDelete(request.params.id);

  if (!category) {
    return next(
      new AppError(`No category found wih id ${request.params.id}`, 404)
    );
  }

  response.status(204).json({
    status: 'success',
    data: null,
  });
});
