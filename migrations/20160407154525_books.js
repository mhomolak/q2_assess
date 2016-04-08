
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table) {
    table.increments();
    table.integer('book_id');
    table.integer('author_id');
    table.string('book_title');
    table.string('book_genre');
    table.text('book_description');
    table.string('book_cover_url');

    table.integer('')

  })
  .createTable('authors', function(table) {
    table.increments('author_id');
    table.string('author_first_name');
    table.string('author_last_name');
    table.text('author_bio');
    table.string('author_pic_url');

    table.integer('book_id').unsigned().references('book_id').inTable('books');
  })
  .createTable('book_author', function(table) {
    table.increments();
    table.integer('book_id');
    table.integer('author_id');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors').dropTable('books').dropTable('book_author');
};
