const path = require('path');

const showHtmlFile = (filename) => {
    return (_r, res, _n) => {
        res.sendFile(path.join(__dirname, '..', 'views', filename));
    }
}

module.exports = showHtmlFile;