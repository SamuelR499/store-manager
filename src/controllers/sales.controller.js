const salesService = require('../services/sales.service');
const { mapError } = require('../utils/errorMap');

const addSales = async (req, res) => { 
  const salesList = req.body;

  const { type, message } = await salesService.addSales(salesList);
  if (type) return res.status(mapError(type)).json({ message });

  res.status(201).json(message);
};

module.exports = {
  addSales,
};
