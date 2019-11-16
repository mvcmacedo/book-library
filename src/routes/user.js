const Router = require('express').Router();

const UserController = require('../controllers/user');
const { authenticate } = require('../middlewares/auth');

Router.route('/')
  .get(UserController.list)
  .post(UserController.create);

Router.get('/books', authenticate, UserController.books);

Router.get('/:id', UserController.get);
Router.put('/:id', authenticate, UserController.update);
Router.delete('/:id', authenticate, UserController.delete);

module.exports = Router;
