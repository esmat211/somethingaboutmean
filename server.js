var express = require('express');
var expressSession = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.use(expressSession({
  secret:'somesecrettokenhere',
  resave: false,
  saveUninitialized: true,
  rolling: true
}));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'))
require(__dirname + '/server/config/mongoose');
require(__dirname + '/server/config/routes')(app);


app.listen(8000, function(){
	console.log('listening to port 8000');
});
