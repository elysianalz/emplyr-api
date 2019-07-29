//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//routes
var profileRoutes = require('./routes/profile');

//use routes
app.use('/api/profile', profileRoutes);

//turn on server
app.listen(3000,'192.168.0.16', function(){
	console.log("api running");

});