const objection = require('objection');
const User = require('./models/User');
const Itinerary = require('./models/Itinerary');
const Entry = require('./models/Entry');

module.exports = (app) => {

  app.get('/users', (req, res, next) => {
    console.log(req.query);
    User
      .query()
      .skipUndefined()
      .where('firstName', req.query.firstName)
      .where('lastName', req.query.lastName)
      .where('fbID', req.query.fbID)
      .then((users) => { res.send(users); })
      .catch(next);
  })

  app.get('/entries', (req, res, next) => {
    Entry
      .query()
      .then((entries) => { res.send(entries); })
      .catch(next);
  })

  app.get('/itineraries', (req, res, next) => {
    Itinerary
      .query()
      .then((itineraries) => { res.send(itineraries); })
      .catch(next);
  })
}


  // app.post('/itineraries', (req, res, next) => {
  //   Itinerary
  //     .query()
  //     .insertAndFetch(req.body)
  //     .then((itinerary) => {
  //       res.send(itinerary);
  //     })
  //     .catch(next);
  // });



// exports.createItin = function (req, res) {
// };

// exports.createEntry = function (req, res) {
// };

// exports.retrieveItin = function (req, res) {
// };

// exports.retrieveAllItins = function (req, res) {
// };

// exports.updateOne = function (req, res) {
// };

// exports.update = function (req, res) {
// };

// exports.deleteOne = function (req, res) {
// };

// exports.faceBookUser = function(req, res) {
// }