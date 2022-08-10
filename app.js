const express = require('express');
const morgan = require('morgan');

// require('./models/category-model');
// require('./models/product-model');

const bodyParser = require('body-parser');
// const path = require('path');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const mainRoutes = require('./routes/main-routes');
// const shopRoutes = require('./routes/shop-routes');
// const addProductRoutes = require('./routes/add-product-routes');
// const editProductRoutes = require('./routes/edit-product-routes');
// const addCategoryRoutes = require('./routes/category-routes');

const categoryRouter = require('./routes/categoryRoutes');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

// const publicDirPath = path.join(__dirname, 'public');
// app.use(express.static(publicDirPath));
app.use(express.static(`${__dirname}/public`));

// Home Route
app.use(mainRoutes);

// Shop Route
// app.use('/shop', shopRoutes);
// // Shop Route Seond Method
// app.use('/shop', shopRoutes());

// Add A Product Route
// app.use('/add-product', addProductRoutes);
// Edit A Product Route
// app.use(editProductRoutes);
// Add A Category Route
// app.use('/add-category', addCategoryRoutes);

// Delete a Product Route
// app.use('/product/:productId');

app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);

// Set 404 View here
// app.use((request, response) => {
//   response.render('index', {
//     pageTitle: '404',
//     pageName: '404',
//   });
// });

app.all('*', (request, response, next) => {
  // response.status(404).json({
  //   status: 'fail',
  //   messsage: `Can't find ${request.originalUrl} on this server`,
  // });

  // const err = new err(`Can't find ${request.originalUrl} on this server`);
  // err.status = 'fail';
  // err.statusCode = 404;
  // next(err);

  next(new AppError(`Can't find ${request.originalUrl} on this server`, 404));
});
app.use(globalErrorHandler);

module.exports = app;
