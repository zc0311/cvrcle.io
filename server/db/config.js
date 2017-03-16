const Knex = require('knex');
const knexConfig = require('../../knexfile');
const Model = require('objection').Model;

const db = Knex(knexConfig.development);

Model.knex(db);

module.exports = db;
