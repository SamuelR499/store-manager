const productsService = require('../services/products.service');
const { mapError } = require('../utils/errorMap');

const getProducts = async (_req, res) => {
  const result = await productsService.getProducts();
  res.status(200).json(result);
};

const getProductId = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductId(id);
  if (type) return res.status(mapError(type)).json({ message });

  res.status(200).json(message);
};

const creatProduct = async (req, res) => { 
  const { name } = req.body;
  const { type, message } = await productsService.creatProduct(name);

  if (type) return res.status(mapError(type)).json({ message });

  res.status(201).json(message);
};

module.exports = {
  getProducts,
  getProductId,
  creatProduct,
};