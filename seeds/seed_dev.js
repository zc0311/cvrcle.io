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
    .then(function () {
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
      ]);
    })
    .then(function () {
      return knex('entries').insert([
        {
          id: 1,
          title: 'Things to Eat in Brocelona',
          text: 'A small descriptive paragraph goes here. Tell them what you think they should do, and why. It\'s the spectaculars.',
          lat: 37.787596,
          lng: -122.40011529999998,
          name: 'Two Bros and a Girl Cafe',
          address: '123 Yourstreet Drive, YourTown, CA, 90210',
          type: 'eatery',
          contributorID: '10106693933724976' // contributed by Armen to his own itin

        },
        {
          id: 2,
          ownerID: '10158329375645263',
          itinName: 'Bloody BadAss Test Itinerary #2',
          isActive: '0',
          isPublic: '1',
        }
      ]);
    })
};