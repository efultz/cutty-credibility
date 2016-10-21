var _ = require('lodash');

var winston = require('winston');
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)()
  ]
});

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  logger.info('GET at "/"');
  logger.info('Full headers:', req.headers);
  logger.info('Full body:', req.body);
  res.json({msg:"hello world from mybranch"});
});

var port = process.env["PORT"];
if( ! port ) {
  port = 6000;
}
app.listen(port, function(){
  logger.info('full env', process.env);
  logger.info('app started listening on port '+port);
});


