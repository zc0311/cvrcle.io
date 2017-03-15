
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
      // table.integer('ownerID').unsigned();
      table.integer('ownerID').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.string('itinName', 40);
      table.integer('isActive');
      table.integer('isPublic');
      table.timestamps(true);
    })
    .createTable('entries', (table) => {
      table.increments('id').primary();
      table.string('title', 50);
      table.text('body', 'mediumtext');
      table.float('lat', 10, 6);
      table.float('lng', 10, 6);
      table.string('name', 60);
      table.string('address', 80);
      table.integer('contributorID').unsigned().references('id').inTable('users').onDelete('CASCADE');
      // table.integer('contributorID').unsigned();
      table.integer('itinID').unsigned().references('id').inTable('itineraries').onDelete('CASCADE');
      // table.integer('itinID').unsigned();
      table.timestamps(true);
    })
    //it creates the requisite join_tables
    // .createTable('users_itins', (table) => {
    //   table.increments('id').primary();
    //   table.integer('userID').unsigned().references('id').inTable('users').onDelete('CASCADE');
    //   table.integer('itinID').unsigned().references('id').inTable('itineraries').onDelete('CASCADE');
    // })
    // .createTable('entries_itins', (table) => {
    //   table.increments('id').primary();
    //   table.integer('ID_itin').unsigned().references('id').inTable('itineraries').onDelete('CASCADE');
    //   table.integer('ID_entry').unsigned().references('id').inTable('entries').onDelete('CASCADE');
    // })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('itineraries')
    .dropTableIfExists('entries')
    .dropTableIfExists('users_itins')
    .dropTableIfExists('entries_itins')
};
