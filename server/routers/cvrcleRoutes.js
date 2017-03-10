var cvrcleRouter = require('express').Router();
var cvrcleController = require('./cvrcleController');

// Create route handlers for each of the six methods in pokemonController
cvrcleRouter.route('/:user')
  .get(cvrcleController.retrieveAll)
  .post(cvrcleController.createOne)

cvrcleRouter.route('/:user/:itinerary')
  .get(cvrcleController.retrieveOne)
  .post(cvrcleController.createOne)
  .put(cvrcleController.updateOne)
  .delete(cvrcleController.deleteOne);



module.exports = cvrcleRouter;
