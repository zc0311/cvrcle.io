// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'cvrcle-dev.cixe27doo37n.us-west-2.rds.amazonaws.com', 
      database: 'armenr',
      user:     'rmenr',
      password: 'Vard33g!!'
     },
    pool: {
      min: 1,
      max: 1
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 5,
      max: 20
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
