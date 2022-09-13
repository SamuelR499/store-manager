const productsModel = require('../models/products.model');
const { validateNewProduct } = require('./validations/validationsInputValues');

const getProducts = async () => {
  const products = await productsModel.getProducts();
  return { type: null, message: products };
};

const getProductId = async (ProductId) => {
  const product = await productsModel.getProductId(ProductId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: product };
};

const creatProduct = async (productName) => { 
  const error = await validateNewProduct(productName);

  if (error.type) { return error; }
  
  const insert = await productsModel.insertProduct(productName);

  return { type: null, message: { id: insert, name: productName } };
};

const updateProduct = async (productName, productId) => { 
   const error = await validateNewProduct(productName);

  if (error.type) { return error; }

  await productsModel.updateProduct(productName, productId);
  const product = await productsModel.getProductId(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

module.exports = {
  getProducts,
  getProductId,
  creatProduct,
  updateProduct,
};