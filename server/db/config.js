const Knex = require('knex');
const knexConfig = require('../../knexfile');
const Model = require('objection').Model;

const db = Knex(knexConfig.development);

Model.knex(db);

module.exports = db;


// var mongoose = require('mongoose');

// var assert = require('assert');
// //this is here for testing

// // line 7 OR line 8 might be redundant
// // we will have to ask about this
// var Promise = require("bluebird");
// var options = { promiseLibrary: require('bluebird') };
// var mongoUri = 'mongodb://hrla13user:DictionaryAttack123!!@ds125060.mlab.com:25060/pokemon';
// var db = mongoose.createConnection(mongoUri, options);

// Promise.promisifyAll(require("mongoose"));
// db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function() {
//   console.log('Yo bro, you\'re good to go!');
// });
// users table
// users_itins --> maps which itineraries belong to which users
// itineraries --> list of itinerary ids
// entries --> table for itinerary ids
// entries_ids --> maps which entries belong to which itineraries
