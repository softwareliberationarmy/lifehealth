const fs = require('fs');
const { getDefaultSettings } = require('http2');
const path = require('path');

const runfile = path.join(path.dirname(process.mainModule.filename), 'data', 'runs.json');

const getRunsFromFile = callback => {
    fs.readFile(runfile, (err, fileContent) => {
        if(err){
            callback([]);
        } else {
            callback(JSON.parse(fileContent));
        }
    });
};

module.exports = class Run {
    constructor(rundate, miles){
        this.rundate = rundate;
        this.miles = miles;
    }

    save() {
        getRunsFromFile(runs => {
            runs.push(this);
            runs.sort((r1, r2) => {
                const secondsDiff = Date.parse(r1.rundate) - Date.parse(r2.rundate);
                return secondsDiff;
            } );
            fs.writeFile(runfile, JSON.stringify(runs), (err) => {
                console.log(err);
            });
        });
    }

    static getAllRuns(callback){
        getRunsFromFile(callback);
    }
}