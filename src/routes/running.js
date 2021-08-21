const express = require('express');
const router = express.Router();

const runnings = [];

const { renderTemplate } = require('../helpers/route-handlers');

router.get('/', renderTemplate('run-home', { runnings: runnings }));

router.get('/add-run', renderTemplate('run-add'));

router.post('/add-run', (req, res) => {
    const newRun = {
        rundate: req.body.rundate,
        distance: req.body.distance
    };
    runnings.push(newRun);
    res.redirect('/running');
});

exports.routes = router;
