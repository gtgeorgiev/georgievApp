'use strict';

const express = require("express");
const path = require("path");
const routes = require("./routes");
const handlebars = require('express3-handlebars')
                        .create({ defaultLayout: 'main' });

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars'); // app.set("view engine", "ejs");

app.use(express.static('public')); // Use resources in folder "public"

app.use(routes);

app.use(function(req, res, next) { // 404 catch-all handler (middleware)
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next) { // 500 error handler (middleware)
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), () => {
    console.log('Server started on port ' + app.get('port'));
});