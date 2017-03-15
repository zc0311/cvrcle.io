
exports.up = function(knex, Promise) {
  return knex.schema
  // It builds the requisite core tables
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('firstName', 20);
      table.string('lastName', 20);
      table.string('email', 25);
      table.string('fbID', 10);
      table.timestamps();
    })
    .createTable('itineraries', (table) => {
      table.increments('id').primary();
      table.integer('ownerID');
      table.string('itinName', 40);
      table.integer('isActive');
      table.integer('isPublic');
      table.timestamps();
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
