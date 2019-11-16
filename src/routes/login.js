const Router = require('express').Router();

const LoginController = require('../controllers/login');

const { validate } = require('../middlewares/schema');

const LoginSchema = require('./schemas/login');

Router.route('/')
  .post(validate(LoginSchema.post()), LoginController.create);

module.exports = Router;
