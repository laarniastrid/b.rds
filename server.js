// ---------- initial vars for app ----------
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 8000,
    connectPath = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/brds',
    app = express();
    // keys = require('./keys.js');


// ---------- .use for app ----------
app.use(bodyParser.json());
app.use(express.static(__dirname + './public/index.html'));  // static part of site to connect to


// ---------- connection to mongoose/heroku ----------
mongoose.set('debug', true);
mongoose.connect(connectPath, function(err) {
  if (err) {
    console.log(err);
  }
});
mongoose.connection.once('open', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to MongoDb');
  }
});


// ---------- base crud stuff for local ----------
app.get('/api/', function(req, res, next) {
  // console.log('getting');
  res.status(200).send('getting');
});
app.post('/api/', function(req, res, next) {
  // console.log('posting');
  res.status(200).send('posting');
});
app.put('/api/:id', function(req, res, next) {
  // console.log('putting');
  res.status(200).send('putting');
});
app.delete('/api/:id', function(req, res, next) {
  // console.log('deleting');
  res.status(200).send('deleting');
});


// ---------- app.listen ----------
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('listening on port ', port);
  }
});
