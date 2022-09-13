const salesService = require('../services/sales.service');
const { mapError } = require('../utils/errorMap');

const addSales = async (req, res) => { 
  const salesList = req.body;

  const { type, message } = await salesService.addSales(salesList);
  if (type) return res.status(mapError(type)).json({ message });

  res.status(201).json(message);
};

const getSales = async (_req, res) => {
  const { message } = await salesService.getSales();
  res.status(200).json(message);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getSaleById(id);
  if (type) return res.status(mapError(type)).json({ message });

  res.status(200).json(message);
};

module.exports = {
  addSales,
  getSales,
  getSalesById,
};
