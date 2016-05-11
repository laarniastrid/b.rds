'use strict'

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let cartSchema = new Schema({
  products: [{
    item: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      min: 1
    }
  }]
})

module.exports = mongoose.model('Cart', cartSchema);
