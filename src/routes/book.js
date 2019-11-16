
const Router = require('express').Router();
const BookController = require('../controllers/book');
const LikeController = require('../controllers/like');

const { validate } = require('../middlewares/schema');
const { authenticate } = require('../middlewares/auth');

const BookSchema = require('./schemas/book');

Router.get('/', BookController.list);
Router.get('/:id', BookController.get);

Router.use(authenticate);

Router.post('/', validate(BookSchema.post()), BookController.create);

Router.put('/:id', validate(BookSchema.put()), BookController.update);
Router.delete('/:id', validate(BookSchema.put()), BookController.delete);

Router.post('/:id/like', validate(BookSchema.like()), LikeController.create);
Router.delete('/:id/deslike', validate(BookSchema.like()), LikeController.delete);

module.exports = Router;
