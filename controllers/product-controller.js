const CategoryModel = require('../models/category-model');
const ProductModel = require('../models/product-model');

exports.getAddProduct = (request, response) => {
  CategoryModel.find().then((categories) => {
    response.render('index', {
      pageTitle: 'Add Product',
      pageName: 'add-product',
      categories,
    });
  });
};

exports.getProduct = (request, response) => {
  ProductModel.find().then((products) => {
    response.render('index', {
      pageTitle: 'Shop',
      pageName: 'shop',
      products,
    });
  });
};

exports.postAddProduct = (request, response) => {
  const product = new ProductModel({
    categoryId: request.body.categoryId,
    title: request.body.title,
    price: +request.body.price,
    description: request.body.description,
    imageUrl: '',
  });
  // eslint-disable-next-line no-unused-vars
  product.save().then((_productAdded) => {
    CategoryModel.find().then((categories) => {
      response.render('index', {
        pageTitle: 'Add Product',
        pageName: 'add-product',
        categories,
      });
    });
  });
};

exports.getEditProduct = async (request, response) => {
  const categories = await CategoryModel.find();
  const product = await ProductModel.findById(request.params.productid);
  response.render('index', {
    pageTitle: 'Edit Product',
    pageName: 'edit-product',
    categories,
    product,
  });
};

exports.postEditProduct = async (request, response) => {
  const categories = await CategoryModel.find();
  const id = request.params.productid;
  const product = await ProductModel.updateOne(
    { id },
    {
      $set: {
        categoryId: request.body.categoryId,
        title: request.body.title,
        price: +request.body.price,
        description: request.body.description,
        imageUrl: '',
      },
    }
  );
  response.render('index', {
    pageTitle: 'Edit Product',
    pageName: 'edit-product',
    categories,
    product,
  });
};
