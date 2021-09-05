const runnings = [];

const { renderTemplate } = require('../helpers/route-handlers');

exports.getHome = renderTemplate('run-home', { runnings: runnings });

exports.getAddRun = renderTemplate('run-add');

exports.postAddRun = (req, res) => {
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
};