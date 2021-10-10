const path = require('path');
const express = require('express');

const { renderTemplate } = require('./helpers/route-handlers');
const running = require('./routes/running');
const weight = require('./routes/weight');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));
//for parsing HTTP post message body 
app.use(express.urlencoded({extended: true}));

//set routes
app.get('/', renderTemplate('index'));
app.use('/running', running.routes);
app.use('/weight', weight.routes)
//construction handler
for(const area of [{ name: 'weight', route: '/weight'}, { name: 'workouts', route: '/workouts'}]){
    app.get(area.route, renderTemplate('construction', { area: area.name}));
}
//last resort handler
app.use(renderTemplate('notfound'));

app.listen(3000);