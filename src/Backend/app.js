
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8081;
app.use("/:param",express.static(__dirname + '/../../public'));

app.use(express.static(__dirname + '/../../public'));

app.listen(port);
console.log('Start on port ' + port);
