var router = require('express').Router();
var controllers = require('../controllers/controllers');

router.route('/:user')
  .get(controllers.retrieveAll)
  .post(controllers.createOne)

router.route('/:user/:itinerary')
  .get(controllers.retrieveOne)
  .post(controllers.createOne)
  .put(controllers.updateOne)
  .delete(controllers.deleteOne);



module.exports = router;
