const productsModel = require('../models/products.model');
const { validateInputValues } = require('./validations/validationsInputValues');

const getProducts = async () => {
  const products = await productsModel.getProducts();
  return products;
};

const getProductId = async (ProductId) => {
  const error = await validateInputValues(ProductId);
  if (error.type) { return error; } 
  const product = await productsModel.getProductId(ProductId);

  return { type: null, message: product };
};

module.exports = {
  getProducts,
  getProductId,
};