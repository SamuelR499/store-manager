// const { addRequestTravelSchema } = require('./schemas');
const productsModel = require('../../models/products.model');
const { addProductSchema } = require('./schemas');

const validateInputValues = async (productId) => {
  /* Valida se productId existe */
  const product = await productsModel.getProductId(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: '' };
};
/* valida name */
  
const validateNewProduct = (name) => { 
  const { error } = addProductSchema.validate({ name });

  if (error) {
    return {
      type: error.details[0].type === 'string.min' ? 'INVALID_FIELD' : 'FIELD_REQUIRED',
      message: error.details[0].message,
    }; 
  }
  return { type: null };
};

module.exports = {
  validateInputValues,
  validateNewProduct,
};