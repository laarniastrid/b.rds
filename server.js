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
app.use(express.static(__dirname + './public/index.html'));  // static part of site to connect to


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
let productsCtrl = require('./server/controllers/productsCtrl.js');
app.get('/api/products', productsCtrl.viewAll)
app.get('/api/products/:id', productsCtrl.viewOne)
app.post('/api/products', productsCtrl.create)
app.put('/api/products/:id', productsCtrl.update)
app.delete('/api/products/:id', productsCtrl.delete)



// ---------- app.listen ----------
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('listening on port ', port);
  }
});
