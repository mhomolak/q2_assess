var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/books', function(req, res, next) {
  res.render('books');
});

router.get('/authors', function(req, res, next) {
  res.render('authors');
});

module.exports = router;
