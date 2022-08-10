const CategoryModel = require('../models/category-model');
const ProductModel = require('../models/product-model');

exports.getShopData = async (request, response) => {
  const categories = await CategoryModel.find();
  const products = await ProductModel.find();

  response.render('index', {
    pageTitle: 'Shop',
    pageName: 'shop',
    categories,
    products,
  });

  //   CategoryModel.find().then((categories) => {
  //     ProductModel.find().then((products) => {
  //       response.render('index', {
  //         pageTitle: 'Shop',
  //         pageName: 'shop',
  //         categories,
  //         products,
  //       });
  //     });
  //   });
};
