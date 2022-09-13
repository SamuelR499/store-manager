const express = require('express');
const salesController = require('../controllers/sales.controller');

const saleRouter = express.Router();

saleRouter.post('/', salesController.addSales);
saleRouter.get('/', salesController.getSales);
saleRouter.get('/:id', salesController.getSalesById);

module.exports = saleRouter;