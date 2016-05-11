'use strict'

let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    cart = require('./cartSchema.js');

let userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  password: {
    type: String,
    required: true
  },
  cart: [cart],
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order'
  }]
})

module.exports = mongoose.model('User', userSchema);
