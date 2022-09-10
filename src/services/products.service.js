const productsModel = require('../models/products.model');

const getProducts = async () => {
  const products = await productsModel.getProducts();
  return products;
};

const getProductId = async (id) => {
  const product = await productsModel.getProductId(id);

  return product;
};

module.exports = {
  getProducts,
  getProductId,
};