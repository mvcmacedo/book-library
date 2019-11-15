const Router = require('express').Router();

const BookController = require('../controllers/book');
const { authenticate } = require('../middlewares/auth');

Router.route('/')
  .get(BookController.list)
  .post(authenticate, BookController.create);

Router.route('/:id')
  .get(BookController.get)
  .put(authenticate, BookController.update)
  .delete(authenticate, BookController.delete);

module.exports = Router;
