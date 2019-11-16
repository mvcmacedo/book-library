const Router = require('express').Router();

const BookController = require('../controllers/book');
const LikeController = require('../controllers/like');

const { authenticate } = require('../middlewares/auth');

Router.get('/', BookController.list);
Router.get('/:id', BookController.get);

Router.use(authenticate);

Router.post(BookController.create);

Router.put('/:id', BookController.update);
Router.delete('/:id', BookController.delete);

Router.post('/:id/like', LikeController.create);
Router.delete('/:id/deslike', LikeController.delete);

module.exports = Router;
