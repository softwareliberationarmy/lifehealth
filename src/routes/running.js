const express = require('express');
const router = express.Router();

const showHtmlFile = require('../helpers/route-handlers');

router.get('/', showHtmlFile('run-add.html'));

exports.routes = router;
