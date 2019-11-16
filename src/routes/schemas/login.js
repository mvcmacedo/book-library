const joi = require('joi');

class LoginSchema {
  static post() {
    return joi.object({
      body: joi
        .object({
          email: joi
            .string()
            .email()
            .required(),
          password: joi.string().required(),
        })
        .required(),
    });
  }
}

module.exports = LoginSchema;
