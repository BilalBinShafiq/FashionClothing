const express = require('express');

const productController = require('../controllers/product-controller');

const router = express.Router();

router.get('/edit-product/:productid', productController.getEditProduct);

router.post('/edit-product/:productid', productController.postEditProduct);

module.exports = router;
