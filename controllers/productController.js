/* eslint-disable no-unused-vars */
const Product = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllProducts = catchAsync(async (request, response, next) => {
  // BUILD QUERY
  const queryObj = { ...request.query };
  const excludeFields = ['page', 'sort', 'limit', 'fields'];
  excludeFields.forEach((el) => delete queryObj[el]);

  const query = Product.find(queryObj);

  // EXECUTE QUERY
  const allProducts = await query;

  // SEND RESPONSE
  response.status(200).json({
    status: 'success',
    data: { product: allProducts },
  });
});

exports.createProduct = catchAsync(async (request, response, next) => {
  const newProduct = await Product.create(request.body);
  response.status(200).json({
    status: 'success',
    data: { product: newProduct },
  });
});

exports.getProduct = catchAsync(async (request, response, next) => {
  const product = await Product.findById(request.params.id);
  response.status(200).json({
    status: 'success',
    data: { product },
  });
});

exports.updateProduct = catchAsync(async (request, response, next) => {
  // new will return the modified category rather than the original
  // runvalidators will update validators validate the update operation against the model schema

  const product = await Product.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true,
      runValidators: true,
    }
  );
  response.status(200).json({
    status: 'success',
    data: { product },
  });
});

exports.deleteProduct = catchAsync(async (request, response, next) => {
  await Product.findByIdAndDelete(request.params.id);
  response.status(204).json({
    status: 'success',
    data: null,
  });
});
