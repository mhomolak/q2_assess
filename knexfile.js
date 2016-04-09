module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/q2_assessment',
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'postgresql',
    connection: 'postgres://nqjtvrhmfifvru:swyrl9mAyAgYbpkDh_9J3kdmHU@ec2-23-23-184-226.compute-1.amazonaws.com:5432/d24rf7u5sq6b0g',
    pool: {
      min: 2,
      max: 10
    }
  }

};
