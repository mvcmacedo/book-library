const BookModel = require('../models/book');

class BookService {
  static async create(data = {}) {
    return BookModel.create(data).catch(() => {
      throw new Error('Create book failed');
    });
  }

  static async get(filters = {}) {
    return BookModel.find(filters).catch(() => {
      throw new Error('Get book failed');
    });
  }

  static async update(id, data = {}) {
    if (!id) {
      throw new Error('Book id not found');
    }

    return BookModel.findByIdAndUpdate(id, data, { new: true, runValidators: true })
      .catch(() => {
        throw new Error('Update book failed');
      });
  }

  static async delete(id) {
    if (!id) {
      throw new Error('Book id not found');
    }

    return BookModel.findByIdAndDelete(id).catch(() => {
      throw new Error('Delete book failed');
    });
  }
}

module.exports = BookService;
