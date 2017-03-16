exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Users').del()
    .then(function () {
      // Inserts seed entries
      return knex('Users').insert([{
        id: 1,
        firstName: 'Armen',
        lastName: 'Rostamian',
        email: 'armenr@gmail.com',
        fbID: '10106693933724976'
      },
      {
        id: 2,
        firstName: 'Regina',
        lastName: 'Lee',
        email: 'regina.v.lee@gmail.com',
        fbID: '10158329375645263'
      },
      {
        id: 3,
        firstName: 'Andrew',
        lastName: 'Yi',
        email: 'andrew.yi.j@gmail.com',
        fbID: '179529875886295'
      }
      ]);
    })
};