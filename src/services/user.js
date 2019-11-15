const UserModel = require('../models/user');

class UserService {
  static async create(data = {}) {
    return UserModel.create(data).catch(() => {
      throw new Error('Create user failed');
    });
  }

  static async get(filters = {}) {
    return UserModel.find(filters).catch(() => {
      throw new Error('Get user failed');
    });
  }

  static async update(id, data = {}) {
    if (!id) {
      throw new Error('User id not found');
    }

    return UserModel.findByIdAndUpdate(id, data, { new: true, runValidators: true })
      .catch(() => {
        throw new Error('Update user failed');
      });
  }

  static async delete(id) {
    if (!id) {
      throw new Error('User id not found');
    }

    return UserModel.findByIdAndDelete(id).catch(() => {
      throw new Error('Delete user failed');
    });
  }
}

module.exports = UserService;
