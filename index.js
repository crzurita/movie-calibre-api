var express = require('express');
var cors = require('cors');
var app = express();
var routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/ping', function (req, res) {
  res.send('Pong')
})

app.use('/api', routes);

var server = app.listen(8000, function () {
  console.log('Server running on port ' + server.address().port)
})