var express = require('express');
var morgan = require('morgan');  // when I active it the server scratched
var List = require('../db');

var app = express()

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

app.use(express.static(__dirname + '/../'));

app.get('/*',function(req,res){
	res.send('this is server.js page'); // this work
	// console.log()
	// List.find()
	//   .then(function(components){
	//     console.log('components is here from DB: ', components);
	//     res.status(200).send(components);
	//   })
	//   .catch(function(err){
	//     console.log('components not found: error: ', err);
	// });
});

app.post('/*', function (req, res) {
  console.log(req.body.username);
  console.log('I am in the server')
});

// app.post('/', function (req, res) {
//   console.log(req.body.username);
// });

app.listen(8000, function(){
	console.log('teneh al7azena')
});
``