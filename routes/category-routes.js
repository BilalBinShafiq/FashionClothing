const express = require('express');

const categoryController = require('../controllers/category-controller');

const router = express.Router();

router.get('/', (request, response) => {
  response.render('index', {
    pageTitle: 'Add Category',
    pageName: 'add-category',
  });
});

router.post('/', categoryController.postCategory);

module.exports = router;
