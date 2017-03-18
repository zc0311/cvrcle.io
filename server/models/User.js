const Model = require('objection').Model;

class User extends Model {
  static get tableName() {
    return 'users'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: [ 'firstName', 'lastName', 'email', 'fbID' ],

      properties: {
        id:         { type: 'integer'},
        firstName:  { type: 'string', minLength: 1, maxLength: 255 },
        lastName:   { type: 'string', minLength: 1, maxLength: 255 },
        email:      { type: 'string', minLength: 1, maxLength: 255 },
        fbID:       { type: 'string', minLength: 1, maxLength: 255 }
      }
    };
  }



  static get relationMappings() {
    return {

      // A user will create multiple itineraries over time
      itineraries: {
        relation: Model.HasManyRelations,
        modelClass: __dirname + '/Itinerary',
        join: {
          from: 'users.id',
          to: 'itineraries.itinID'
        }
      },
      
      //A user contributes many entries (to their own itineraires, and to those of others)
      entries: {
        relation: Model.HasManyRelations,
        modelClass: __dirname + '/Entry',
        join: {
          from: 'users.id',
          to: 'entries.contributorID'
        }
      }
    }
  }

}

module.exports = User;
