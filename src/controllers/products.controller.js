const productsService = require('../services/products.service');

const getProducts = async (_req, res) => {
  const result = await productsService.getProducts();
  res.status(200).json(result);
};

const getProductId = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.getProductId(id);
  if (result.length < 1) return res.status(404).json({ message: 'Product not found' });

  res.status(200).json(result);
};

module.exports = {
  getProducts,
  getProductId,
};