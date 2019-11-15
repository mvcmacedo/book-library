const Router = require('express').Router();

const UserController = require('../controllers/user');

Router.route('/')
  .get(UserController.list)
  .post(UserController.create);

Router.route('/:id')
  .get(UserController.get)
  .put(UserController.update)
  .delete(UserController.delete);

module.exports = Router;
