const CategorytModel = require('../models/category-model');

exports.getCategory = (request, response) => {
  CategorytModel.find().then((category) => {
    response.render('index', {
      pageTitle: 'Shop',
      pageName: 'shop',
      category,
    });
  });
};

exports.postCategory = (request, response) => {
  const category = new CategorytModel({
    title: request.body.title,
    description: request.body.description,
    imageUrl: '',
  });
  // eslint-disable-next-line no-unused-vars
  category.save().then((_categoryAdded) => {
    response.render('index', {
      pageTitle: 'Add Category',
      pageName: 'add-category',
    });
  });
};
