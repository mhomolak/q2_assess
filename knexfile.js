module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/q2_assessment',
    pool: {
      min: 2,
      max: 10
    }
  }

  production: {
    client: 'postgresql',
    connection: 'postgresql://localhost/q2_assessment',
    pool: {
      min: 2,
      max: 10
    }
  }

};
