const express = require('express');
const productsController = require('../controllers/products.controller');

const productRouter = express.Router();

productRouter.get('/search', productsController.getByQuery);

productRouter.get('/:id', productsController.getProductId);

productRouter.delete('/:id', productsController.deleteProduct);

productRouter.put('/:id', productsController.updateProduct);

productRouter.get('/', productsController.getProducts);

productRouter.post('/', productsController.creatProduct);

module.exports = productRouter;