// Entry point for the application

// express application
var express = require('express');
// require the controller we make
var surveyController = require('./surveyController');

var path = require('path');

var app = express();

// set up template engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// static file serving
app.use(express.static(path.join(__dirname,'./public')));

// fire function from surveyController
surveyController(app);

// listen to port
app.listen(3000);
console.log('listening port 3000');