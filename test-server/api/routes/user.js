var User = require("../../model/user");

module.exports = {
  getUsers: async function(req, res, next) {
    try {
      var users = await User.find();
      res.status(200).send(users);
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

  getUserById: async function(req, res, next) {
    try {
      var user = await User.findById(req.params.id);
      res.status(200).send(user);
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

  getUserByEmail: async function(req, res, next) {
    try {
      var user = await User.find({ email: req.params.email });

      res.status(200).send(user);
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

  createUser: async function(req, res, next) {
    try {
      var user = await User.create(req.body);
      res.status(200).send(user);
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

  updateUser: async function(req, res, next) {
    try {
      var user = await User.update({ _id: req.params.id }, req.body);
      res.status(200).send(user);
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
