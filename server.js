var express = require('express');
var app = express();

var comments = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

app.set('view engine', 'jade');
app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/comments.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.post('/comments.json', function(req, res) {
  comments.push(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.listen(3000);
console.log('Express server started on localhost:3000\n');
