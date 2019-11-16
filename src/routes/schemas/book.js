const joi = require('joi');

class BookSchema {
  static post() {
    return joi.object({
      body: joi
        .object({
          title: joi.string().required(),
          ISBN: joi.string().min(10).max(20).required(),
          category: joi.string().default('Fiction').required(),
          year: joi.number().min(0).max(2019).required(),
        }).required(),
    });
  }

  static put() {
    return joi.object({
      params: joi
        .object({
          id: joi.string(),
        })
        .required(),
      body: joi.object({
        title: joi.string(),
        ISBN: joi.string().min(10).max(20),
        category: joi.string(),
        year: joi.number().min(0).max(2019),
      }),
    });
  }

  static delete() {
    return joi.object({
      params: joi
        .object({
          id: joi.string().required(),
        })
        .required(),
    });
  }

  static like() {
    return joi.object({
      params: joi
        .object({
          id: joi.string().required(),
        })
        .required(),
    });
  }
}

module.exports = BookSchema;
