const express = require('express');
const router = express.Router();
const controller = require('../controllers/weight');

router.get('/', controller.getHome);

exports.routes = router;