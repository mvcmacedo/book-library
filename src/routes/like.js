const Router = require('express').Router();

const LikeController = require('../controllers/like');

const { authenticate } = require('../middlewares/auth');

Router.use(authenticate);

Router.post('/like/:book_id', LikeController.create);

Router.delete('/deslike/:book_id', LikeController.delete);

module.exports = Router;
