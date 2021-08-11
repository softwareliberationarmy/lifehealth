const path = require('path');
const express = require('express');

const app = express();

const showHtmlFile = (filename) => {
    return (_r, res, _n) => {
        res.sendFile(path.join(__dirname, 'views', filename));
    }
}

//serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

app.get('/', showHtmlFile('index.html'));

//construction handler
for(const route of ['/running', '/weight', '/workouts']){
    app.get(route, showHtmlFile('construction.html'));
}

//last resort handler
app.use(showHtmlFile('notfound.html'));

app.listen(3000);