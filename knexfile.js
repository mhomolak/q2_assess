module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/q2-assess',
    pool: {
      min: 2,
      max: 10
    }
  }

};
