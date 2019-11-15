const BookService = require('../services/book');
const LikeService = require('../services/like');

class LikeController {
  static async create(req, res) {
    try {
      const { book_id } = req.params;

      const [book] = await BookService.get({ _id: book_id });

      if (!book) {
        return res.status(404).send({ message: 'Book not found' });
      }

      const { _id: user_id } = req.user;

      const [has_book] = await LikeService.get({ user: user_id, book: book_id });

      if (has_book) {
        return res.status(401).send({ message: 'User has already liked this book' });
      }

      await LikeService.create({ user: user_id, book: book_id });

      const likes = await LikeService.get({ user: user_id });

      res.status(200).send(likes);
    } catch ({ message }) {
      res.status(500).send({ message });
    }
  }

  static async delete(req, res) {
    try {
      const { book_id } = req.params;

      const [book] = await BookService.get({ _id: book_id });

      if (!book) {
        return res.status(404).send({ message: 'Book not found' });
      }

      const { _id: user_id } = req.user;

      const [has_book] = await LikeService.get({ user: user_id, book: book_id });

      if (!has_book) {
        return res.status(401).send({ message: 'User has already desliked this book' });
      }

      await LikeService.delete({ user: user_id, book: book_id });

      const likes = await LikeService.get({ user: user_id });

      res.status(200).send(likes);
    } catch ({ message }) {
      res.status(500).send({ message });
    }
  }
}

module.exports = LikeController;
