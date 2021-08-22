const router = require('express').Router();
const housesController = require('../controller/houses-controller');
const housesMiddleware = require('../middleware/houses-middleware');

router.get('/', housesController.getAllHouses);

router.get('/:id', housesMiddleware.checkIsIdValid, housesController.getOneHouse);

router.post('/', housesController.createHouse);


module.exports = router;