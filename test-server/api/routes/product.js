var Product = require("../../model/product");

module.exports = {
  getProducts: async function(req, res, next) {
    try {
      var products = await Product.find();
      res.status(200).send(products);
    } catch (err) {
      console.log(err);
      res.status(200).send({
        status: "failure",
        code: 6,
        errorCode: err.code,
        message: err.message
      });
    }
  },

  getProductById: async function(req, res, next) {
    try {
      var product = await Product.findById(req.params.id);
      res.status(200).send(product);
    } catch (err) {
      console.log(err);
      res.status(200).send({
        status: "failure",
        code: 6,
        errorCode: err.code,
        message: err.message
      });
    }
  },

  createProduct: async function(req, res, next) {
    try {
      var product = await Product.create(req.body);
      res.status(200).send(product);
    } catch (err) {
      console.log(err);
      res.status(200).send({
        status: "failure",
        code: 6,
        errorCode: err.code,
        message: err.message
      });
    }
  },

  updateProduct: async function(req, res, next) {
    try {
      var product = await Product.update({ _id: req.params.id }, req.body);
      res.status(200).send(product);
    } catch (err) {
      console.log(err);
      res.status(200).send({
        status: "failure",
        code: 6,
        errorCode: err.code,
        message: err.message
      });
    }
  }
};