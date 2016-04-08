exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('authors_books').del(),

    knex('authors_books').insert({authors_id: 1, books_id: 1}),
    knex('authors_books').insert({authors_id: 2, books_id: 1}),
    knex('authors_books').insert({authors_id: 3, books_id: 1}),
    knex('authors_books').insert({authors_id: 4, books_id: 2}),
    knex('authors_books').insert({authors_id: 5, books_id: 3}),
    knex('authors_books').insert({authors_id: 6, books_id: 4}),
    knex('authors_books').insert({authors_id: 6, books_id: 5}),
    knex('authors_books').insert({authors_id: 6, books_id: 6})
  );
};
