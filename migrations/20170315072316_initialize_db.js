
exports.up = function(knex, Promise) {
  return knex.schema
  // It builds the requisite core tables
    .createTable('Users', (table) => {
      table.increments('id').primary();
      table.string('firstName', 20);
      table.string('lastName', 20);
      table.string('email', 25);
      table.string('fbID');
      table.timestamps(true);
    })
    .createTable('Itineraries', (table) => {
      table.increments('id').primary();
      table.integer('ownerID').unsigned().references('id').inTable('Users').onDelete('CASCADE');
      // table.string('ownerID');
      table.string('itinName', 40);
      table.integer('isActive');
      table.integer('isPublic');
      table.timestamps(true);
    })
    .createTable('Entries', (table) => {
      table.increments('id').primary();
      table.string('title', 50);
      table.text('body', 'mediumtext');
      table.float('lat', 10, 6);
      table.float('lng', 10, 6);
      table.string('name', 60);
      table.string('address', 80);
      table.integer('contributorID').unsigned().references('id').inTable('Users').onDelete('CASCADE');
      //table.string('contributorID');
      table.integer('itinID').unsigned().references('id').inTable('Itineraries').onDelete('CASCADE');
      // table.string('itinID');
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
