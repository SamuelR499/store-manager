const salesModel = require('../models/sales.models');
const productsService = require('./products.service');

const { validateNewSale } = require('./validations/validationsInputValues');

const isExistingProduct = async (salesList) => {
  const productsList = await Promise
    .all(salesList.map(({ productId }) => productsService.getProductId(productId)));
  
  const error = productsList.find((elem) => elem.type === 'PRODUCT_NOT_FOUND');
  return error;
 };

const addSales = async (salesList) => { 
  const error = validateNewSale(salesList);
  if (error.type) { return error; }

  const notFound = await isExistingProduct(salesList);
  if (notFound) { return notFound; }

  const saleId = await salesModel.insertSale();
  await Promise.all(salesList.map(async (sale) => {
    await salesModel.insertSalesProducts({
      saleId,
      productId: sale.productId,
      quantity: sale.quantity,
    });
  }));

return { type: null, message: { id: saleId, itemsSold: salesList } };
};

module.exports = {
  addSales,
};