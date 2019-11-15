const UserService = require('../services/user');

class UserController {
  static async get(req, res) {
    try {
      const { id: _id } = req.params;

      const [user] = await UserService.get({ _id });

      if (!user) {
        res.status(404).send({ message: 'User not found' });
      }

      res.status(200).send(user);
    } catch ({ message }) {
      res.status(500).send({ message });
    }
  }

  static async list(req, res) {
    try {
      const users = await UserService.get();

      res.status(200).send(users);
    } catch ({ message }) {
      res.status(500).send({ message });
    }
  }

  static async create(req, res) {
    try {
      const data = req.body;

      if (data.password !== data.password_check) {
        res.status(400).send({ message: 'Please, check if your passwords match' });
      }

      delete data.password_check;

      const user = await UserService.create(data);

      res.status(201).send(user);
    } catch ({ message }) {
      res.status(500).send({ message });
    }
  }

  static async update(req, res) {
    try {
      const _id = req.params.id;

      const { _id: user_id } = req.user;

      if (req._id !== String(user_id)) {
        res.status(401).send({ message: 'User not authorized' });
      }

      const [user] = await UserService.get({ _id });

      if (!user) {
        res.status(404).send({ message: 'User not found' });
      }

      const data = req.body;

      const updated_user = await UserService.update(_id, data);

      res.status(200).send(updated_user);
    } catch ({ message }) {
      res.status(500).send({ message });
    }
  }

  static async delete(req, res) {
    try {
      const { id: _id } = req.params;

      const { _id: user_id } = req.user;

      if (_id !== String(user_id)) {
        res.status(401).send({ message: 'User not authorized' });
      }

      const [user] = await UserService.get({ _id });

      if (!user) {
        res.status(404).send({ message: 'User not found' });
      }

      await UserService.delete(_id);

      res.status(204).send({});
    } catch ({ message }) {
      res.status(500).send({ message });
    }
  }
}

module.exports = UserController;