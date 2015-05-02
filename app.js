var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Agenda = require('agenda');
var mongoose = require('mongoose');
var request = require('request');
var constants = require('./config/constants');


var upsAPI = require('shipping-ups');
var uspsAPI = require('shipping-usps');

var usps = new uspsAPI({

});

var ups = new upsAPI({
	
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('./routes')(app);


app.listen(contants.port, function(){
	console.log('> Listening');
});