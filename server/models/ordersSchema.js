'use strict'

let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    productSchema = require('./productSchema.js')

let ordersSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [{
    type: productSchema,
    quantity: {
      type: Number,
      min: 1,
      required: true
    },
    ordered: {
      type: Date,
      default: new Date()
    }
  }]
})

module.exports = mongoose.model('orders', ordersSchema);
