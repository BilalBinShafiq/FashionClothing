const express = require('express');

const productController = require('../controller/product-controller');

const router = express.Router();

router.get('/', productController.getAddProduct);

router.post('/', productController.postAddProduct);

module.exports = router;
