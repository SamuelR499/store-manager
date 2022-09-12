const productsService = require('../services/products.service');

const getProducts = async (_req, res) => {
  const result = await productsService.getProducts();
  res.status(200).json(result);
};

const getProductId = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductId(id);
  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
};

module.exports = {
  getProducts,
  getProductId,
};