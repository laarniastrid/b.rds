'use strict'

let Products = require('../models/productsSchema.js');

module.exports = {
  viewAll: (req, res, next) => {
    let search = req.query;
    Products.find(search, (err, r) => {
      return err ? res.status(500).json(err) : res.status(200).json(r);
    })
  },
  viewOne: (req, res, next) => {
    let search = req.params.id;
    Products.findById(search, (err, r) => {
      return err ? res.status(500).json(err) : res.status(200).json(r);
    })
  },
  create: (req, res, next) => {
    let search = req.body;
    Products.create(search, (err, r) => {
      return err ? res.status(500).json(err) : res.status(200).json(r);
    })
  },
  update: (req, res, next) => {
    let search = req.params.id;
    Products.findByIdAndUpdate(search, req.body, (err, r) => {
      return err ? res.status(500).json(err) : res.status(200).json(r);
    })
  },
  delete: (req, res, next) => {
    let search = req.params.id;
    Products.findByIdAndRemove(search, (err, r) => {
      return err ? res.status(500).json(err) : res.status(200).json(r);
    })
  }
}
