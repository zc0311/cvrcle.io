const objection = require('objection');
const User = require('./models/User');
const Itinerary = require('./models/Itinerary');
const Entry = require('./models/Entry');

// we should refactor this to DRY out the code and instead user
// express.router and controllers
// since the models come with their own validation schematic
// we can create ONE "postOne" method for all routes
// and then trust that the model defined in the ORM will 
// prevent an insertOne of any given Model type object
// that is incomplete/malformed/invalid

module.exports = (app) => {

  app.get('/users', (req, res, next) => {
    User
      .query()
      .skipUndefined()
      .where('firstName', req.query.firstName)
      .where('lastName', req.query.lastName)
      .where('fbID', req.query.fbID)
      .then((users) => { res.send(users); })
      .catch(next);
  })

  app.post('/users', (req, res, next) => {
    User
      .query()
      .insertAndFetch(req.body)
      .then((user) => { res.send(user)})
      .catch(next);
  })

  app.get('/entries', (req, res, next) => {
    Entry
      // we can add 'where' logic to filter and query results
      .query()
      .then((entries) => { res.send(entries); })
      .catch(next);
  })

  app.post('/entries', (req, res, next) => {
    console.log('request body is', req.body);
    let fitinID = parseInt(req.body.itinID);
    let fcontributorID = parseInt(req.body.contributorID)
    let formattedEntry = {
      title: req.body.title,
      body:  req.body.body,
      name:  req.body.name,
      address: req.body.address,
      contributorID: fcontributorID,
      itinID: fitinID,
      lat: req.body.lat,
      lng: req.body.lng
    }
    Entry
      .query()
      .insertAndFetch(formattedEntry)
      .then((entry) => { res.send(entry)})
      .catch(next);
  })

  app.get('/itineraries', (req, res, next) => {
    Itinerary
      // we can add 'where' logic to filter and query results
      .query()
      .then((itineraries) => { res.send(itineraries); })
      .catch(next);
  })

  app.post('/itineraries', (req, res, next) => {
    Itinerary
      .query()
      .insertAndFetch(req.body)
      .then((itinerary) => { res.send(itinerary)})
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
