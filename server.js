var express = require('express');
var app = express();


app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000);
console.log('Express server started on localhost:3000\n');
