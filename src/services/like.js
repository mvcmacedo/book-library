const LikeModel = require('../models/like');

class LikeService {
  static async create(data = {}) {
    return LikeModel.create(data).catch(() => {
      throw new Error('Create like failed');
    });
  }

  static async get(filters = {}, options = {}) {
    const find = LikeModel.find(filters);

    if (options.withBooks) {
      find.populate('book');
    }

    return find.catch(() => {
      throw new Error('Get like failed');
    });
  }

  static async delete(filters = {}) {
    return LikeModel.deleteMany(filters).catch(() => {
      throw new Error('Delete like failed');
    });
  }
}

module.exports = LikeService;
