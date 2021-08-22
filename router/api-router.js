const router = require('express').Router();
const housesRouter = require('./houses-router');

router.use('/houses', housesRouter);


module.exports = router;