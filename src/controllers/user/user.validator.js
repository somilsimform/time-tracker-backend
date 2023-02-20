const Joi = require('joi');

export const login = {
  body: {
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required(),
  },
};
