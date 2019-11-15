const Router = require('express').Router();

const UserRoute = require('./user');
const BookRoute = require('./book');
const LoginRoute = require('./login');
const LikeRoute = require('./like');

Router.use('/user', UserRoute);
Router.use('/book', BookRoute);
Router.use('/login', LoginRoute);
Router.use('/favorite', LikeRoute);

module.exports = Router;
