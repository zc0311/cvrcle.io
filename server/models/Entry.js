const Model = require('objection').Model;

class Entry extends Model {
  static get tableName() {
    return 'entries'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: [ 'title', 'body','lat', 'lng', 'name', 'address', 'contributorID', 'itinID' ],

      properties: {
        id:             { type: 'integer' },
        title:          { type: 'string', minLength: 1, maxLength: 255 },
        body:           { type: 'string', minLength: 1, maxLength: 255 },
        lat:            { type: 'float', precision: 10, scale: 6 },
        lng:            { type: 'float', precision: 10, scale: 6 },
        name:           { type: 'string', minLength: 1, maxLength: 255 },
        address:        { type: 'string', minLength: 1, maxLength: 255 },
        contributorID:  { type: 'string', minLength: 1, maxLength:255 },
        itinID:         { type: 'integer', minLength: 1 }
      }
    };
  }
}

module.exports = Entry;
