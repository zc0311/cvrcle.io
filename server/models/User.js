const Model = require('objection').Model;

function User() {
  Model.apply(this, arguments);
}

Model.extend(User);
module.exports = User;

User.tableName = 'users';