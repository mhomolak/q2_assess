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

router.get('/books/new', function(req, res, next) {
  res.render('new_book');
});

router.get('/books/edit', function(req, res, next) {
  res.render('edit_book');
});

router.get('/authors', function(req, res, next) {
  res.render('authors');
});

router.get('/authors/new', function(req, res, next) {
  res.render('new_author');
});

router.get('/authors/edit', function(req, res, next) {
  res.render('edit_author');
});

module.exports = router;
