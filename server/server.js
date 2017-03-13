const express = require('express');
const app = express();
const db = require('./db/config.js');
const path = require('path');
const favicon = require('serve-favicon');
const dotenv = require('dotenv')
const cvrcleCtlr = require('./controllers/controllers.js');
const router = require('./routes/router');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

// load in ENV variables before ANYTHING
dotenv.load();


const strategy = new Auth0Strategy({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  callbackURL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/calback'
}, (accessToken, refreshToken, extraParams, profile, done) => {
  // accessToken is the token to call Auth0 API (not needed in the most cases)
  // extraParams.id_token has the JSON Web Token
  // profile has all the information from the user
  return done(null, profile);
});

passport.use(strategy);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});





// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', router);

// serve up React front-end client code
// commenting out for now while I layer in a working
// auth0 implementation
// app.use(express.static('client'));




app.listen(port, function () {
  console.log('Cvrcle listening on port ' + port);
});
