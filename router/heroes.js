const express = require('express');
const heroesController = require('../controllers/heroesController');

const router = express.Router();

const heroesRouter = require('../controllers/heroesController');

router.get('/',heroesController.index);

router.get('/:idHeroe', heroesController.detalle);

router.get('/heroes/bio/:id/:ok?', heroesController.bio);

module.exports = router 