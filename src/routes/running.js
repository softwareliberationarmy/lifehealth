const express = require('express');
const router = express.Router();

const runnings = [];

const { renderTemplate } = require('../helpers/route-handlers');

router.get('/', renderTemplate('run-home', { runnings: runnings }));

router.get('/add-run', renderTemplate('run-add'));

router.post('/add-run', (req, res) => {
    const newRun = {
        rundate: req.body.rundate,  //written as a string value
        distance: req.body.distance
    };
    runnings.push(newRun);
    runnings.sort((r1, r2) => {
        const secondsDiff = Date.parse(r1.rundate) - Date.parse(r2.rundate);
        console.log('secondsDiff', secondsDiff);
        return secondsDiff;
    } );
    console.log('runnings', runnings);
    res.redirect('/running');
});

exports.routes = router;
