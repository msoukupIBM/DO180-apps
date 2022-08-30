var createError = require('http-error');

var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello Wor__ld from pod: ' + process.env.HOSTNAME + '\n')
});

app.listen(8080, function () {
  console.log('Example app listen__ing on port 8080!');
});

