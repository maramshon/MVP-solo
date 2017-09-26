var mongoose = require('mongoose');

// mongoose.connect(process.env.DBSERVER || 'mongodb://localhost/fetcher');

mongoose.connect('mongodb:http://localhost:27017/');
// 127.0.0.1:27017
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to DB');
});

var listSchema = mongoose.Schema({

  list_id: {type: Number, index: {unique: true, dropDups: true} },
  list_owner: String,
  list_component: String,

});

var List = mongoose.model('List', listSchema);
