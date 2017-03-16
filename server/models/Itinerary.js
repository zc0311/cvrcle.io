const Model = require('objection').Model;

function Itinerary() {
  Model.apply(this, arguments);
}

Model.extend(Itinerary);
module.exports = Itinerary;

Itinerary.tableName = 'itineraries';