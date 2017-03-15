exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
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
        }
      ]);
    })
    .then(function() {
      return knex('itineraries').insert([
        {
          id: 1,
          ownerID: '10106693933724976',
          itinName: 'Fuckin Awesome Test Itinerary #1',
          isActive: '0',
          isPublic: '1',
        },
        {
          id: 2,
          ownerID: '10158329375645263',
          itinName: 'Bloody BadAss Test Itinerary #2',
          isActive: '0',
          isPublic: '1',
        }
      ])
    })
};