const express = require('express');
const mongoose = require('mongoose');
require('./models/category-model');
require('./models/product-model');

const bodyParser = require('body-parser');
const path = require('path');
const mainRoutes = require('./routes/main-routes');
const shopRoutes = require('./routes/shop-routes');
const addProductRoutes = require('./routes/add-product-routes');
const editProductRoutes = require('./routes/edit-product-routes');
const addCategoryRoutes = require('./routes/category-routes');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', 'views');

const publicDirPath = path.join(__dirname, 'public');
app.use(express.static(publicDirPath));

// Home Route
app.use(mainRoutes);

// Shop Route
app.use('/shop', shopRoutes);
// // Shop Route Seond Method
// app.use('/shop', shopRoutes());

// Add A Product Route
app.use('/add-product', addProductRoutes);
// Edit A Product Route
app.use(editProductRoutes);
// Add A Category Route
app.use('/add-category', addCategoryRoutes);

// Delete a Product Route
app.use('/product/:productId');

// Set 404 View here
app.use((request, response) => {
  response.render('index', {
    pageTitle: '404',
    pageName: '404',
  });
});

mongoose.connect('mongodb://localhost:27017/male_fashion', () => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Express server is listing on port ${port}!`);
  });
});
