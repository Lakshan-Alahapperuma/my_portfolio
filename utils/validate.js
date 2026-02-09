const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  subject: Joi.string().max(200).allow('', null),
  message: Joi.string().min(5).max(2000).required()
});

module.exports = { contactSchema };
