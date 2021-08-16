const path = require('path');
const express = require('express');

const showHtmlFile = require('./helpers/route-handlers');
const running = require('./routes/running');

const app = express();

//serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

app.get('/', showHtmlFile('index.html'));

app.use('/running', running.routes);

//construction handler
for(const route of ['/weight', '/workouts']){
    app.get(route, showHtmlFile('construction.html'));
}

//last resort handler
app.use(showHtmlFile('notfound.html'));

app.listen(3000);