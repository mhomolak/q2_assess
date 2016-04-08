exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('book_author').insert({
      book_id: 1, author_id: 1}),
    knex('book_author').insert({
      book_id: 1, author_id: 2}),
    knex('book_author').insert({
      book_id: 1, author_id: 3}),
    knex('book_author').insert({
      book_id: 2, author_id: 4}),
    knex('book_author').insert({
      book_id: 3, author_id: 5}),
    knex('book_author').insert({
      book_id: 4, author_id: 6}),
    knex('book_author').insert({
      book_id: 5, author_id: 6}),
    knex('book_author').insert({
      book_id: 6, author_id: 6})
  );
};
