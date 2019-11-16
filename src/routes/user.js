const Router = require('express').Router();

const UserController = require('../controllers/user');

const { validate } = require('../middlewares/schema');
const { authenticate } = require('../middlewares/auth');

const UserSchema = require('./schemas/user');

Router.route('/')
  .get(UserController.list)
  .post(validate(UserSchema.post()), UserController.create);

Router.use(authenticate);

Router.get('/books', UserController.books);

Router.route('/:id')
  .get(UserController.get)
  .put(validate(UserSchema.put()), UserController.update)
  .delete(validate(UserSchema.delete()), UserController.delete);

module.exports = Router;
