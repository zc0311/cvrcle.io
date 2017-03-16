const Knex = require('knex');
const morgan = require('morgan');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const knexConfig = require('../knexfile');
const registerApi = require('./api');
const Model = require('objection').Model;
const cors = require('cors');

dotenv.load();

const knex = Knex(knexConfig.development);

Model.knex(knex);

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(morgan('dev'))
  .set('json spaces', 2);

registerApi(app);

// serve up React front-end client code
// commenting out for now while I layer in a working
// auth0 implementation
// app.use(express.static('client'));

// Error handling
app.use((err, req, res, next) => {
  if (err) {
    res.status(err.statusCode || err.status || 500).send(err.data || err.message || {});
  } else {
    next();
  }
})

app.listen(port, function () {
  console.log('Cvrcle listening on port ' + port);
});
