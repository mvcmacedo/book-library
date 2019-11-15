const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const database = require('./config/database');

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== 'production';

    this.middlewares();
    this.database();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  database() {
    mongoose.connect(database.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
