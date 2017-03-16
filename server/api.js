const objection = require('objection');
const User = require('./models/User');
const Itinerary = require('./models/Itinerary');
const Entry = require('./models/Entry');

module.exports = (app) => {
  app.post('/itineraries', (req, res, next) => {
    Itinerary
      .query()
      .insertAndFetch(req.body)
      .then((itinerary) => { res.send(itinerary); })
      .catch(next);
  });

  app.get('/users', (req, res, next) => {
    User
      .query()
      .then((users) => { res.send(users); })
      .catch(next);
  })
}





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