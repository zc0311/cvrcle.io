exports.seed = function (knex, Promise) {
  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => {
      return knex('Entries').del()
        .then(function () {
          // Inserts seed entries
          return knex('Entries').insert([{
              id: 1,
              title: 'Go To HackReactor',
              body: 'A small descriptive paragraph goes here. Tell them what you think they should do, and why. It\'s the spectaculars.',
              lat: 33.9759435,
              lng: -118.3907289,
              name: 'Hack Reactor, Center Drive, Los Angeles, CA, United States',
              address: '6060 Center Dr, Los Angeles, CA 90045, USA',
              contributorID: '1',      // contributed by Armen to his own itin
              itinID: 1                               // belongs to Armen's Fuckin Awesome Itinerary 
            },
            {
              id: 2,
              title: 'Go Getty Em At The Museum',
              body: 'Have some culture, you animal.',
              lat: 34.0458857,
              lng: -118.56486080000002,
              name: 'The Getty Villa, Los Angeles, CA, United States',
              address: 'Getty Villa, 17985 Pacific Coast Hwy, Pacific Palisades, CA 90272, USA',
              contributorID: '2',   // contributed by Regina to Armen's itin
              itinID: 1                            // belongs to Armen's Fuckin Awesome Itinerary
            },
            {
              id: 3,
              title: 'Go Eat Steaks Here',
              body: 'Have some dinner.',
              lat: 34.0493641,
              lng: -118.2609468,
              name: 'Morton\'s The Steakhouse',
              address: "S Figueroa St, Los Angeles, CA 90017, USA",
              contributorID: '3',   // contributed by Andrew to Armen's Itin
              itinID: 1                            // belongs to Armen's
            },
            {
              id: 4,
              title: 'Go Hike At This Trail',
              body: 'Blah blah blah body text something hiking something something blergh. More text filler nonsense hello description stuffs',
              lat: 34.3093955,
              lng: -118.51361680000002,
              name: "O'Melveny Park, Los Angeles, CA, United States",
              address: 'Getty Villa, 17985 Pacific Coast Hwy, Pacific Palisades, CA 90272, USA',
              contributorID: '2',   // contributed by Regina to her own itin
              itinID: 2                            // belongs to Regina's' Itinerary
            },
            {
              id: 5,
              title: 'Incredible View of the Golden Gate Bridge',
              body: 'The view is incredible. Go here and hike down to the beach. Walk along the ocean in the sand until you reach the point where you can see the Golden Gate in all its glory.',
              lat: 37.8016521,
              lng: -122.4798778,
              name: "Marshall's Beach, San Francisco, CA, United States",
              address: "Marshall's Beach, San Francisco, CA 94129, USA",
              contributorID: '1',   // contributed by Armen to his Regina's'
              itinID: 2                            // belongs to Regina's Itinerary
            },
            {
              id: 6,
              title: 'Go Eat Tacos @ Garaje',
              body: 'Tacos for the win.',
              lat: 37.787596,
              lng: -122.40011529999998,
              name: 'Garaje, 3rd Street, San Francisco, CA, United States',
              address: '475 3rd St, San Francisco, CA 94107, USA',
              contributorID: '3',   // contributed by Andrew to REgina's'
              itinID: 2                             // belongs to Regina's' itin
            },
            {
              id: 7,
              title: 'Go Have Coffee Here',
              body: 'Philz is a classic. Go there and order the mint mojito. Yummiez for dayzzzzzzzz BRO!',
              lat: 34.017935,
              lng: -118.49357099999997,
              name: 'Philz Coffee, Santa Monica Boulevard, Santa Monica, CA, United States',
              address: '525 Santa Monica Blvd, Santa Monica, CA 90401, USA',
              contributorID: '3',   // contributed by Andrew to his own
              itinID: 3                             // belongs to Andrew's Itinerary
            },
            {
              id: 8,
              title: 'Armenian/Lebanese Food',
              body: 'No visit to Los Angeles or Cali is complete without stopping off for some dank-ass, authentic Armenian/Lebanese foods. Go to Zankou, get the half-chicken plate, and grab yourself a Shawerma wrap too.',
              lat: 34.0471585,
              lng: -118.44372340000001,
              name: 'Zankou Chicken, Los Angeles, CA, United States',
              address: '1716 S Sepulveda Blvd, Los Angeles, CA 90025, USA',
              contributorID: '1',   // contributed by Armen to Andrew's itin
              itinID: 3                             // belongs to Andrew's' Itinerary
            },
            {
              id: 9,
              title: 'Do You Even Persian Ice Cream, Bruh?',
              body: 'Whether or not you like ice cream, Persian ice cream is on another level. Recommendations include: rosewater ice cream, rosewater saffron ice cream, and the pistachio ice cream is FIYA too!',
              lat: 34.098754,
              lng: -118.34495170000002,
              name: "Mashti Malone's Ice Cream, North La Brea Avenue, Los Angeles, CA, United States",
              address: "1525 N La Brea Ave, Los Angeles, CA 90028, USA",
              contributorID: '2',   // contributed by Regina to Andrew's itin
              itinID: 3                             // belongs to Andrew's' Itinerary
            }
          ]);
        })
    })
};