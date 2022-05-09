const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().alphanum().min(3).max(15);

const createUserSchema = Joi.object({
  id: id.required(),
  name: name.required()
});

const updateUserSchema = Joi.object({
  id: id,
  name: name
});

const getUserSchema = Joi.object({
  id: id.required()
});

module.exports = {createUserSchema, updateUserSchema, getUserSchema}
