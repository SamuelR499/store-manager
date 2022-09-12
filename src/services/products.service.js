const productsModel = require('../models/products.model');
const { validateInputValues, validateNewProduct } = require('./validations/validationsInputValues');

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

const creatProduct = async (productName) => { 
  const error = await validateNewProduct(productName);

  if (error.type) { return error; }
  
  const insert = await productsModel.insertProduct(productName);

  return { type: null, message: { id: insert, name: productName } };
};

module.exports = {
  getProducts,
  getProductId,
  creatProduct,
};