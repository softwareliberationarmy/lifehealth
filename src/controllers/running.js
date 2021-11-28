const Run = require('../models/run');

const { renderTemplate } = require('../helpers/route-handlers');

exports.getHome = (req,res,next) => {
    Run.findAll()
    .then(runs => {
        console.log(runs);
        res.render('run-home', { runnings: runs});
    });
}; 

exports.getAddRun = renderTemplate('run-add');

exports.postAddRun = (req, res) => {
    console.log('new run', req.body);
    const newRun = Run.create({
        runDate: req.body.rundate,
        miles: req.body.distance
    })
    .then(result => {
        res.redirect('/running');
    })
    .catch(err => {
        console.log(err);
    });

};