const express = require('express');
const app = express();
const cvrcleCtlr = require('./controllers/cvrcleControllers');
const cvrcleRouter = require('./routers/cvrcleRoutes');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');








// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve up React front-end client code
// app.use(express.static('client'));

app.use('/', cvrcleRouter);


app.listen(port, function () {
  console.log('Cvrcle listening on port ' + port);
});
