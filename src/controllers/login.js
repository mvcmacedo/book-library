const UserModel = require('../models/user');

class LoginController {
  static async create(req, res) {
    try {
      const { email, password } = req.body;

      const [user] = await UserModel.find({ email });

      if (!user) {
        throw new Error();
      }

      const is_password_valid = await user.compareHash(password);

      if (!is_password_valid) {
        throw new Error();
      }

      res.status(201).send({ user: user._doc, token: UserModel.generateToken(user) });
    } catch (err) {
      res.status(401).send({ message: 'Invalid user/password' });
    }
  }
}

module.exports = LoginController;
