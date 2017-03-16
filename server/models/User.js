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
}

module.exports = User;
