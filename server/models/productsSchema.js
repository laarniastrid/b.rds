var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var productsSchema = new Schema({
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
  }
})

module.exports = mongoose.model('Products', productsSchema);
