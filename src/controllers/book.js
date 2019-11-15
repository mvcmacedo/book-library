const BookService = require('../services/book');

class BookController {
  static async get(req, res) {
    try {
      const { id: _id } = req.params;

      const [book] = await BookService.get({ _id });

      if (!book) {
        res.status(404).json({ message: 'Book not found' });
      }

      res.status(200).send(book);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async list(req, res) {
    try {
      const books = await BookService.get();

      res.status(200).send(books);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async create(req, res) {
    try {
      const data = req.body;

      const book = await BookService.create(data);

      res.status(201).send(book);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async update(req, res) {
    try {
      const _id = req.params.id;

      const [book] = await BookService.get({ _id });

      if (!book) {
        res.status(404).json({ message: 'Book not found' });
      }

      const data = req.body;

      const updated_book = await BookService.update(_id, data);

      res.status(200).send(updated_book);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async delete(req, res) {
    try {
      const { id: _id } = req.params;

      const [book] = await BookService.get({ _id });

      if (!book) {
        res.status(404).json({ message: 'Book not found' });
      }

      await BookService.delete(_id);

      res.status(204).send({});
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = BookController;
