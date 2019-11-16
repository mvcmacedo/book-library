const joi = require('joi');

class SchemaMiddleware {
  static __validate__(schema, req, res, next) {
    try {
      const opts = {
        stripUnknown: true,
        allowUnknown: true,
      };

      const { error, value } = joi.validate(req, schema, opts);

      if (error) {
        res.status(400).send({ message: `Bad request. ${error.message}` });

        return;
      }

      req.headers = value.headers || req.headers;
      req.body = value.body || req.body;
      req.params = value.params || req.params;
      req.query = value.query || req.query;

      next();
    } catch (err) {
      res.status(500).send({ message: 'Internal failure' });
    }
  }

  validate(schema) {
    return SchemaMiddleware.__validate__.bind(null, schema);
  }
}

module.exports = new SchemaMiddleware();
