var express = require('express');
// var morgan = require('morgan');  // when I active it the server scratched

var app = express()
app.get('/',function(req,res){
	res.send('hgsfkhjaghgfasrj');
})

app.listen(8000, function(){
	console.log('teneh al7azena')
})