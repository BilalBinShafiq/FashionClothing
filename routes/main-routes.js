const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
  response.render('index', {
    pageTitle: 'Home',
    pageName: 'home',
  });
});

router.get('/about-us', (request, response) => {
  response.render('index', {
    pageTitle: 'About Us',
    pageName: 'about-us',
  });
});

router.get('/contact-us', (request, response) => {
  response.render('index', {
    pageTitle: 'Contact Us',
    pageName: 'contact-us',
  });
});

module.exports = router;
