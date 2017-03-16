exports.seed = function (knex, Promise) {
  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => {
      return knex('itineraries').del()
        .then(function () {
          return knex.raw('SET foreign_key_checks = 0;')
            .then(() => {
              return knex('itineraries').insert([{
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
                },
                {
                  id: 3,
                  ownerID: '179529875886295',
                  itinName: 'Flippin Cool Test Itinerary #3',
                  isActive: '0',
                  isPublic: '1',
                }
              ]);
            })
        })
    })






  // Inserts seed entries



};