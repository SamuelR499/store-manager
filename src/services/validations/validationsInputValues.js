const { addProductSchema, addSaleSchema } = require('./schemas');

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

/* valida produtos a ser adicionado em sales */
const validateNewSale = (info) => { 
  const { error } = addSaleSchema.validate(info);

  if (error) { 
    return {
      type: error.details[0].type === 'number.greater' ? 'INVALID_FIELD' : 'FIELD_REQUIRED',
      message: error.details[0].message.replace(/\[\d\]./, ''),
    }; 
  }

  return { type: null };
};

/* Valida se o produto existe */

module.exports = {
  validateNewProduct,
  validateNewSale,
};