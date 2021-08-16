const express = require('express');
const router = express.Router();

const showHtmlFile = require('../helpers/route-handlers');

router.get('/', showHtmlFile('run-home.html'));

router.get('/add-run', showHtmlFile('run-add.html'));

router.post('/add-run', (req, res, next) => {

});

exports.routes = router;
