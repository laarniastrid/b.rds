'use strict'

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let ordersSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})
