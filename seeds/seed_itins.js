exports.seed = function (knex, Promise) {
  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => {
      return knex('Itineraries').del()
        .then(function () {
          return knex.raw('SET foreign_key_checks = 0;')
            .then(() => {
              return knex('Itineraries').insert([{
                  id: 1,
                  ownerID: '1',
                  itinName: 'Fuckin Awesome Test Itinerary #1',
                  isActive: '0',
                  isPublic: '1',
                },
                {
                  id: 2,
                  ownerID: '2',
                  itinName: 'Bloody BadAss Test Itinerary #2',
                  isActive: '0',
                  isPublic: '1',
                },
                {
                  id: 3,
                  ownerID: '3',
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