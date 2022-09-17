const express = require('express');
const salesController = require('../controllers/sales.controller');

const saleRouter = express.Router();

saleRouter.post('/', salesController.addSales);
saleRouter.get('/', salesController.getSales);
saleRouter.get('/:id', salesController.getSalesById);
saleRouter.delete('/:id', salesController.deleteSale);

module.exports = saleRouter;