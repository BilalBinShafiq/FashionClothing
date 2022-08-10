const Product = require('../models/productModel');

exports.getAllProducts = async (request, response) => {
  try {
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
  } catch (err) {
    response.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createProduct = async (request, response) => {
  try {
    const newProduct = await Product.create(request.body);
    response.status(200).json({
      status: 'success',
      data: { product: newProduct },
    });
  } catch (err) {
    response.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getProduct = async (request, response) => {
  try {
    const product = await Product.findById(request.params.id);
    response.status(200).json({
      status: 'success',
      data: { product },
    });
  } catch (err) {
    response.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateProduct = async (request, response) => {
  try {
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
  } catch (err) {
    response.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteProduct = async (request, response) => {
  try {
    await Product.findByIdAndDelete(request.params.id);
    response.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    response.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
