const path = require('path');
const express = require('express');

const { showHtmlFile, renderTemplate } = require('./helpers/route-handlers');
const running = require('./routes/running');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));
//parse body 
app.use(express.urlencoded({extended: true}));

app.get('/', renderTemplate('index'));

app.use('/running', running.routes);

//construction handler
for(const area of [{ name: 'weight', route: '/weight'}, { name: 'workouts', route: '/workouts'}]){
    app.get(area.route, renderTemplate('construction', { area: area.name}));
}

//last resort handler
app.use(showHtmlFile('notfound.html'));

app.listen(3000);