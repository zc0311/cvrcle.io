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
const path = require('path');

// load env variables
dotenv.load();

// load database things and bind to models
const knex = Knex(knexConfig.development);
Model.knex(knex);

//here be the server
const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(morgan('dev'))
  .set('json spaces', 2)
  .use(express.static('./app/build'));

// pull server into API context
registerApi(app);

// catch all errors and use next() cleverly
app.use((err, req, res, next) => {
  if (err) {
    res.status(err.statusCode || err.status || 500).send(err.data || err.message || {});
  } else {
    next();
  }
})

// listen and serve
app.listen(port, function () {
  console.log('Cvrcle listening on port ' + port);
});
