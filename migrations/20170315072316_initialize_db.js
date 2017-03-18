
exports.up = function(knex, Promise) {
  return knex.schema
  // It builds the requisite core tables
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('firstName', 20);
      table.string('lastName', 20);
      table.string('email', 25);
      table.string('fbID');
      table.timestamps(true);
    })
    .createTable('itineraries', (table) => {
      table.increments('id').primary();
      table.integer('ownerID').unsigned().references('id').inTable('users').onDelete('CASCADE');
      // table.string('ownerID');
      table.string('itinName', 40);
      table.integer('isActive');
      table.integer('isPublic');
      table.timestamps(true);
    })
    .createTable('entries', (table) => {
      table.increments('id').primary();
      table.string('title', 50);
      table.text('body', 'mediumtext');
      table.string('lat');
      table.string('lng');
      table.string('name', 60);
      table.string('address', 80);
      table.integer('contributorID').unsigned().references('id').inTable('users').onDelete('CASCADE');
      //table.string('contributorID');
      table.integer('itinID').unsigned().references('id').inTable('itineraries').onDelete('CASCADE');
      // table.string('itinID');
      table.timestamps(true);
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
