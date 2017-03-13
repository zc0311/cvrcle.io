const app = require('./server.js');
const port = process.env.PORT || 3000;


app.listen(port, function () {
  console.log('Cvrcle listening on port ' + port);
});
