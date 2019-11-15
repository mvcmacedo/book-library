const Router = require('express').Router();

const UserController = require('../controllers/user');
const { authenticate } = require('../middlewares/auth');

Router.route('/')
  .get(UserController.list)
  .post(UserController.create);

Router.route('/:id')
  .get(UserController.get)
  .put(authenticate, UserController.update)
  .delete(authenticate, UserController.delete);

module.exports = Router;
