const express = require('express');
const fortune = require('./lib/fortune.js');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/about', (req, res) => {
  res.render('about', { fortune: fortune.getFortune() });
});

module.exports = router;