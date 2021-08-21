const path = require('path');

const showHtmlFile = (filename) => {
    return (_r, res, _n) => {
        res.sendFile(path.join(__dirname, '..', 'views', filename));
    }
}

const renderTemplate = (templateName, input) => {
    return (_r, res, _n) => {
        res.render(templateName, input);
    }
}

module.exports ={
    showHtmlFile,
    renderTemplate
};