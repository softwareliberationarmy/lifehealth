const path = require('path');
const express = require('express');

const app = express();

//serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (_r, res, _n) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//last resort handler
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "notfound.html"));
});

app.listen(3000);