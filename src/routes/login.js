const Router = require('express').Router();

const LoginController = require('../controllers/login');

Router.route('/')
  .post(LoginController.create);

module.exports = Router;
