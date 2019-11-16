const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const UserModel = require('../models/user');

const authConfig = require('../config/auth');

class AuthMiddleware {
  static async authenticate(req, res, next) {
    try {
      const auth = req.headers.authorization;

      if (!auth) {
        return res.status(400).send({ message: 'Token not provided' });
      }

      const [, token] = auth.split(' ');

      const { _id } = await promisify(jwt.verify)(token, authConfig.secret).catch(() => {
        throw new Error('Invalid token');
      });

      const user = await UserModel.findById(_id);

      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }

      req.user = user;

      return next();
    } catch ({ message }) {
      res.status(500).send({ message });
    }
  }
}

module.exports = AuthMiddleware;
