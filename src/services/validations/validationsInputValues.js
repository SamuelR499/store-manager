// const { addRequestTravelSchema } = require('./schemas');
const productsModel = require('../../models/products.model');

const validateInputValues = async (productId) => {
  /* Valida se productId existe */
  const product = await productsModel.getProductId(productId);
  if (!product) return { type: 404, message: 'Product not found' };

  return { type: null, message: '' };
};

module.exports = {
  validateInputValues,
};