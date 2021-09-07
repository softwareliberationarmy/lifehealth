const Run = require('../models/run');

const { renderTemplate } = require('../helpers/route-handlers');

exports.getHome = (req,res,next) => {
    Run.getAllRuns(runs => {
        res.render('run-home', { runnings: runs});
    });
}; 

exports.getAddRun = renderTemplate('run-add');

exports.postAddRun = (req, res) => {
    const newRun = new Run(req.body.rundate,  //written as a string value
        req.body.distance);
    newRun.save();
    res.redirect('/running');
};