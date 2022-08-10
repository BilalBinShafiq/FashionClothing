const Category = require('../models/categoryModel');

exports.getAllCategories = async (request, response) => {
  try {
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
  } catch (err) {
    response.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createCategory = async (request, response) => {
  try {
    const newCategory = await Category.create(request.body);
    response.status(200).json({
      status: 'success',
      data: { category: newCategory },
    });
  } catch (err) {
    response.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getCategory = async (request, response) => {
  try {
    const category = await Category.findById(request.params.id);
    response.status(200).json({
      status: 'success',
      data: { category },
    });
  } catch (err) {
    response.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateCategory = async (request, response) => {
  try {
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
    response.status(200).json({
      status: 'success',
      data: { category },
    });
  } catch (err) {
    response.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteCategory = async (request, response) => {
  try {
    await Category.findByIdAndDelete(request.params.id);
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
