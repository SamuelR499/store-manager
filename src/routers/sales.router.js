const express = require('express');
const salesController = require('../controllers/sales.controller');

const saleRouter = express.Router();

saleRouter.post('/', salesController.addSales);

module.exports = saleRouter;