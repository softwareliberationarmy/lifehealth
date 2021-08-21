const express = require('express');
const router = express.Router();

const runnings = [];

const showHtmlFile = require('../helpers/route-handlers');

router.get('/', (req,res,next) => {
    res.render('run-home', {
        runnings: runnings
    });
});

router.get('/add-run', (req,res,next) => {
    res.render('run-add');
});

router.post('/add-run', (req, res, next) => {
    const newRun = {
        rundate: req.body.rundate,
        distance: req.body.distance
    };
    runnings.push(newRun);
    res.redirect('/running');
});

exports.routes = router;
