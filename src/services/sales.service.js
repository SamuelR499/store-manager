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

const getSales = async () => {
  const sales = await salesModel.getSales();
  return { type: null, message: sales };
};

const getSaleById = async (saleId) => {
  const sales = await salesModel.getSaleById(saleId);
  if (!sales.length > 0) {
    return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  }

  return { type: null, message: sales };
};

const deleteSale = async (saleId) => { 
  const sale = await salesModel.getSaleById(saleId);
  if (!sale.length > 0) {
    return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  }
  await salesModel.deleteSale(saleId);
  return { type: null };
};

module.exports = {
  addSales,
  getSales,
  getSaleById,
  deleteSale,
};