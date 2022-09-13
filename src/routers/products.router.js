const express = require('express');
const productsController = require('../controllers/products.controller');

const productRouter = express.Router();

productRouter.get('/', productsController.getProducts);

productRouter.get('/:id', productsController.getProductId);

productRouter.post('/', productsController.creatProduct);

productRouter.put('/:id', productsController.updateProduct);

module.exports = productRouter;