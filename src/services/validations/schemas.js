const Joi = require('joi');

const addProductSchema = Joi.object({
  name: Joi.string().min(5).required().messages({
    'string.empty': '"name" is required',
    'string.min': '"name" length must be at least 5 characters long',
  }),
});

const addSaleSchema = Joi.array().items(Joi.object({
  productId: Joi.number().required().messages({
    'number.empty': '"productId" is required',
  }),

  quantity: Joi.number().greater(0).required().messages({
    'number.greater': '"quantity" must be greater than or equal to 1',
    'number.empty': '"quantity" is required',
  }),
}));
  module.exports = {
    addProductSchema,
    addSaleSchema,
  };