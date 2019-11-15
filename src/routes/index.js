const Router = require('express').Router();

const UserRoute = require('./user');
const BookRoute = require('./book');

Router.use('/user', UserRoute);
Router.use('/book', BookRoute);

module.exports = Router;
