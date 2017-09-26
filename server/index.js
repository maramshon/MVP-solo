var express = require('express');
var morgan = require('morgan');  // when I active it the server scratched

var app = express()

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

// app.use(bodyParser.json());

app.use(express.static(__dirname + '/../'));

app.get('/',function(req,res){
	res.send('this is server.js page');
	// res.sendFile('index.html' , {app : path.join(__dirname +'/../')}
	// res.render('/index');
});

app.get('/Maram', function(req, res) {
  // res.render('index');
  res.send('========================');
});



app.listen(8000, function(){
	console.log('teneh al7azena')
});
``