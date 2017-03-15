exports.seed = function (knex, Promise) {
  return knex.raw('SET foreign_key_checks = 0;')

    .then(() => {
      return knex('entries').del()
        .then(function () {
          // Inserts seed entries
          return knex('entries').insert([{
              id: 1,
              title: 'Go To HackReactor',
              body: 'A small descriptive paragraph goes here. Tell them what you think they should do, and why. It\'s the spectaculars.',
              lat: 33.9759435,
              lng: -118.3907289,
              name: 'Hack Reactor, Center Drive, Los Angeles, CA, United States',
              address: '6060 Center Dr, Los Angeles, CA 90045, USA',
              contributorID: '10106693933724976', // contributed by Armen to his own itin
              itinID: 1 // belongs to Armen's Fuckin Awesome Itinerary 
            },
            {
              id: 2,
              title: 'Go Getty Em At The Museum',
              body: 'Have some culture, you animal.',
              lat: 34.0458857,
              lng: -118.56486080000002,
              name: 'The Getty Villa, Los Angeles, CA, United States',
              address: 'Getty Villa, 17985 Pacific Coast Hwy, Pacific Palisades, CA 90272, USA',
              contributorID: '10158329375645263', // contributed by Regina to Armen's itin
              itinID: 1 // belongs to Armen's Fuckin Awesome Itinerary
            },
            {
              id: 3,
              title: 'Go Eat Steaks Here',
              body: 'Have some dinner, you animal.',
              lat: 34.0493641,
              lng: -118.2609468,
              name: 'Morton\'s The Steakhouse',
              address: "S Figueroa St, Los Angeles, CA 90017, USA",
              contributorID: '10158329375645263', // contributed by Andrew to Armen's Itin
              itinID: 2 // belongs to Armen's
            },
            {
              id: 4,
              title: 'Go Hike At This Trail',
              body: 'Have some coffee, you wonderful human.',
              lat: 37.787596,
              lng: -122.40011529999998,
              name: 'HackReactor, San Francisco',
              address: 'Getty Villa, 17985 Pacific Coast Hwy, Pacific Palisades, CA 90272, USA',
              contributorID: '10106693933724976', // contributed by Regina to her own itin
              itinID: 2 // belongs to Regina's' Itinerary
            },
            {
              id: 5,
              title: 'Incredible View of the Golden Gate Bridge',
              body: 'Have some coffee, you wonderful human.',
              lat: 37.787596,
              lng: -122.40011529999998,
              name: 'HackReactor, San Francisco',
              address: 'Getty Villa, 17985 Pacific Coast Hwy, Pacific Palisades, CA 90272, USA',
              contributorID: '10106693933724976', // contributed by Armen to his Regina's'
              itinID: 2 // belongs to Regina's Itinerary
            },
            {
              id: 6,
              title: 'Go Eat Tacos @ Garaje',
              body: 'Have some coffee, you wonderful human.',
              lat: 37.787596,
              lng: -122.40011529999998,
              name: 'HackReactor, San Francisco',
              address: 'Getty Villa, 17985 Pacific Coast Hwy, Pacific Palisades, CA 90272, USA',
              contributorID: '10106693933724976', // contributed by Andrew to REgina's'
              itinID: 2 // belongs to Regina's' itin
            },
            {
              id: 7,
              title: 'Go Have Coffee Here',
              body: 'Have some coffee, you wonderful human.',
              lat: 37.787596,
              lng: -122.40011529999998,
              name: 'HackReactor, San Francisco',
              address: 'Getty Villa, 17985 Pacific Coast Hwy, Pacific Palisades, CA 90272, USA',
              contributorID: '10106693933724976', // contributed by Andrew to his own
              itinID: 3 // belongs to Andrew's Itinerary
            },
            {
              id: 8,
              title: 'Go Have Coffee Here',
              body: 'Have some coffee, you wonderful human.',
              lat: 37.787596,
              lng: -122.40011529999998,
              name: 'HackReactor, San Francisco',
              address: 'Getty Villa, 17985 Pacific Coast Hwy, Pacific Palisades, CA 90272, USA',
              contributorID: '10106693933724976', // contributed by Armen to Andrew's itin
              itinID: 3 // belongs to Andrew's' Itinerary
            },
            {
              id: 9,
              title: 'Go Have Coffee Here',
              body: 'Have some coffee, you wonderful human.',
              lat: 37.787596,
              lng: -122.40011529999998,
              name: 'HackReactor, San Francisco',
              address: 'Getty Villa, 17985 Pacific Coast Hwy, Pacific Palisades, CA 90272, USA',
              contributorID: '10106693933724976', // contributed by Regina to Andrew's itin
              itinID: 3 // belongs to Andrew's' Itinerary
            }
          ]);
        })

    })

  // Deletes ALL existing entries

};