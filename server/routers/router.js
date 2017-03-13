var router = require('express').Router();
var cvrcleController = require('../controllers/cvrcleControllers');

router.route('/:user')
  .get(cvrcleController.retrieveAll)
  .post(cvrcleController.createOne)

router.route('/:user/:itinerary')
  .get(cvrcleController.retrieveOne)
  .post(cvrcleController.createOne)
  .put(cvrcleController.updateOne)
  .delete(cvrcleController.deleteOne);



module.exports = router;
