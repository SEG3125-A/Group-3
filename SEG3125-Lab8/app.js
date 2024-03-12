// Entry point for the application

// express application
var express = require('express');
// require the controller we make

var path = require('path');

var app = express();

// set up template engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// static file serving
app.use(express.static(path.join(__dirname,'./public')));

app.get('/', function(req, res){
	res.sendFile(__dirname+'/views/home.html');
});

app.get('/gallery', function(req, res){
	res.sendFile(__dirname+'/views/gallery.html');
});

app.get('/profile', function(req, res){
	res.sendFile(__dirname+'/views/profile.html');
});

// listen to port
app.listen(3000);
console.log('listening port 3000');