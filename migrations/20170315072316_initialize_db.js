
exports.up = function(knex, Promise) {
  return knex.schema
  // It builds the requisite core tables
    .createTable('users', (table) => {
      table.increments('id').primary();
    })
    .createTable('itineraries', (table) => {
      table.increments('id').primary();
    })
    .createTable('entries', (table) => {
      table.increments('id').primary();
    })
    //it creates the requisite join_tables
    .createTable('users_itins', (table) => {
      table.increments('id').primary();
    })
    .createTable('entries_itins', (table) => {
      table.increments('id').primary();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('itineraries')
    .dropTableIfExists('entries')
    .dropTableIfExists('users_itins')
    .dropTableIfExists('entries_itins')
};
