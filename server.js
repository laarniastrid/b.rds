'use strict'

// ---------- initial vars for app ----------
let express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 8000,
    connectPath = process.env.MONGOLAB_URI || 'mongodb://localhost/brds',
    app = express();
    // keys = require('./keys.js');


// ---------- .use for app ----------
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));  // static part of site to connect to


// ---------- connection to mongoose/heroku ----------
mongoose.set('debug', true);
mongoose.connect(connectPath, (err) => {
  if (err) {
    console.log(err);
  }
});
mongoose.connection.once('open', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to MongoDb');
  }
});


// ---------- endpoints for products ----------
let productCtrl = require('./server/controllers/productCtrl.js');
app.get('/api/products', productCtrl.viewAll)
app.get('/api/products/:id', productCtrl.viewOne)
app.post('/api/products', productCtrl.create)
app.put('/api/products/:id', productCtrl.update)
app.delete('/api/products/:id', productCtrl.delete)

// ---------- endpoints for user ----------


// ---------- app.listen ----------
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('listening on port ', port);
  }
});
