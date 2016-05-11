'use strict'

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let productsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
    // required: true
  }
})

module.exports = mongoose.model('Products', productsSchema);
