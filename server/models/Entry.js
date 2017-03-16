const Model = require('objection').Model;

function Entry() {
  Model.apply(this, arguments);
}

Model.extend(Entry);
module.exports = Entry;

Entry.tableName = 'entries';