// const ngrok = require('ngrok')
var express = require('express'),
  es6Renderer = require('express-es6-template-engine'),
  app = express(),
  port = process.env.PORT || 9001;
var bodyParser = require('body-parser');
  var cors = require('cors');


  app.engine('html', es6Renderer);

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

  app.use(cors());



  var routes = require('./routes/routes');
  routes(app);

  
app.listen(port);

console.log('UD RESTful API server started on: ' + port);

