const express = require('express');
const router = express.Router();
const runningController = require('../controllers/running');

router.get('/', runningController.getHome);

router.get('/add-run', runningController.getAddRun);
router.post('/add-run', runningController.postAddRun);

exports.routes = router;
