var express = require('express');
var router = express.Router();

var UserController = require('./routes/user');
var ProductController = require('./routes/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/users').get(UserController.getUsers);
router.route('/users/:id').get(UserController.getUserById);
router.route('/users/email/:email').get(UserController.getUserByEmail);
router.route('/users').post(UserController.createUser);
router.route('/users/:id').put(UserController.updateUser);

router.route('/products').get(ProductController.getProducts);
router.route('/products/:id').get(ProductController.getProductById);
router.route('/products').post(ProductController.createProduct);
router.route('/products/:id').put(ProductController.updateProduct);

module.exports = router;
