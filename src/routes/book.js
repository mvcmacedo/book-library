const Router = require('express').Router();

const BookController = require('../controllers/book');

Router.route('/')
  .get(BookController.list)
  .post(BookController.create);

Router.route('/:id')
  .get(BookController.get)
  .put(BookController.update)
  .delete(BookController.delete);

module.exports = Router;
