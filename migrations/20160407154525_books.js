
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table) {
    table.increments('book_id');
    table.string('book_title');
    table.string('book_genre');
    table.string('book_description');
    table.string('book_cover_url');

  })
  .createTable('authors', function(table) {
    table.increments('author_id');
    table.string('author_first_name');
    table.string('author_last_name');
    table.string('author_bio');
    table.string('author_pic_url');

    table.integer('book_id').unsigned().references('book_id').inTable('books');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books').dropTable('authors');
};
