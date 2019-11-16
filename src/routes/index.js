const Router = require('express').Router();

const UserRoute = require('./user');
const BookRoute = require('./book');
const LoginRoute = require('./login');

Router.use('/user', UserRoute);
Router.use('/book', BookRoute);
Router.use('/login', LoginRoute);

module.exports = Router;
