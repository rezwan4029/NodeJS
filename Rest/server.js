//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//MongoDB
mongoose.connect('mongodb://localhost/rest_test');


//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


/*
app.get('/', function(req, res){
   res.send('Its working fine!');
});
*/

//Routes
app.use('/api', require('./routes/api'));


//Server
app.listen(3000);
