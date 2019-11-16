const joi = require('joi');

class UserSchema {
  static post() {
    return joi.object({
      body: joi
        .object({
          name: joi.string().required(),
          age: joi.number().min(0).max(100).required(),
          phone: joi.number().required(),
          password: joi.string().required(),
          password_check: joi.string().required(),
          email: joi
            .string()
            .email()
            .required(),
        })
        .required(),
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
        name: joi.string(),
        phone: joi.number(),
        password: joi.string(),
        email: joi.string().email(),
        age: joi.number().min(0).max(100),
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
}

module.exports = UserSchema;
