const express = require('express');
const salesController = require('../controllers/sales.controller');

const saleRouter = express.Router();

saleRouter.get('/:id', salesController.getSalesById);
saleRouter.delete('/:id', salesController.deleteSale);
saleRouter.put('/:id', salesController.updateSale);

saleRouter.post('/', salesController.addSales);
saleRouter.get('/', salesController.getSales);

module.exports = saleRouter;