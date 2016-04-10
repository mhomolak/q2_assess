var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.DB_ENV]);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/books', function(req, res, next) {
  knex('authors')
  .innerJoin('authors_books', 'authors.id', 'authors_books.authors_id')
  .innerJoin('books', 'authors_books.authors_id', 'books.id')
  .then(function(results) {
    res.render('books', {title: "Yep", authors_and_books: results});
  })
});

router.get('/books/new', function(req, res, next) {
  res.render('new_book');
});

router.get('/books/edit', function(req, res, next) {
  res.render('edit_book');
});

router.get('/authors', function(req, res, next) {
  knex('authors')
  .innerJoin('authors_books', 'authors.id', 'authors_books.authors_id')
  .innerJoin('books', 'authors_books.authors_id', 'books.id')
  .then(function(results) {
    res.render('authors', {title: "Yep", authors: results});
  })
});

router.get('/authors/new', function(req, res, next) {
  res.render('new_author');
});

router.get('/authors/edit', function(req, res, next) {
  res.render('edit_author');
});



module.exports = router;
