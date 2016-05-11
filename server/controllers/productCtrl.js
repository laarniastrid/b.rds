'use strict'

let Product = require('../models/productSchema.js');

module.exports = {
  viewAll: (req, res, next) => {
    let search = req.query;
    Product.find(search, (err, r) => {
      return err ? res.status(500).json(err) : res.status(200).json(r);
    })
  },
  viewOne: (req, res, next) => {
    let search = req.params.id;
    Product.findById(search, (err, r) => {
      return err ? res.status(500).json(err) : res.status(200).json(r);
    })
  },
  create: (req, res, next) => {
    let search = req.body;
    Product.create(search, (err, r) => {
      return err ? res.status(500).json(err) : res.status(200).json(r);
    })
  },
  update: (req, res, next) => {
    let search = req.params.id;
    Product.findByIdAndUpdate(search, req.body, (err, r) => {
      return err ? res.status(500).json(err) : res.status(200).json(r);
    })
  },
  delete: (req, res, next) => {
    let search = req.params.id;
    Product.findByIdAndRemove(search, (err, r) => {
      return err ? res.status(500).json(err) : res.status(200).json(r);
    })
  }
}
