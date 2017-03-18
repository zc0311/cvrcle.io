const Model = require('objection').Model;

class Entry extends Model {
  static get tableName() {
    return 'entries'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: [ 'title', 'body', 'lat', 'lng', 'name', 'address', 'contributorID', 'itinID' ],

      properties: {
        id:             { type: 'integer' },
        title:          { type: 'string', minLength: 1, maxLength: 255 },
        body:           { type: 'string', minLength: 1, maxLength: 255 },
        lat:            { type: 'string', minLength: 1, maxLength: 255 },
        lng:            { type: 'string', minLength: 1, maxLength: 255 },
        name:           { type: 'string', minLength: 1, maxLength: 255 },
        address:        { type: 'string', minLength: 1, maxLength: 255 },
        contributorID:  { type: 'integer', minLength: 1 },
        itinID:         { type: 'integer', minLength: 1 }
      }
    };
  }

  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Itinerary',
        join: {
          from: 'entries.itinID',
          to: 'itineraries.id'
        }
      },
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'entries.contributorID',
          to: 'users.id'
        }
      }
    }
  }

}

module.exports = Entry;
