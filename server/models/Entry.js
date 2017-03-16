var Model = require('objection').Model;

function Entry() {
  Model.apply(this, arguments);
}

Model.extend(Entry);

module.exports = Entry;


Entry.relationMappings = {
  owner: {
    relation: Model.BelongsToOneRelation,
    // The related model. This can be either a Model subclass constructor or an
    // absolute file path to a module that exports one. We use the file path version
    // here to prevent require loops.
    modelClass: __dirname + '/Person',
    join: {
      from: 'Animal.ownerId',
      to: 'Person.id'
    }
  }
};