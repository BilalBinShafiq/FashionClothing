const express = require('express');

const shopController = require('../controller/shop-controller');

const router = express.Router();

router.get('/', shopController.getShopData);

module.exports = router;
// // Second Method
// module.exports = () => {
//   router.get('/', (request, response) => {
//     response.render('shop', {
//       pageTitle: 'shop',
//       pageName: 'shop'
//     });
//   });
//   return router;
// };
