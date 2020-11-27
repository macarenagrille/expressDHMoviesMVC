const express = require('express');
const heroesController = require('../controllers/heroesController');

const router = express.Router();

const heroesRouter = require('../controllers/heroesController');

router.get('/',heroesController.index);

router.get('/:detalle', heroesController.detalle);

router.get('/bio/:id/:ok?', heroesController.bio);

module.exports = router 