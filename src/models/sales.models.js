const connection = require('./connection');

const insertSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUE(NOW())',
  );

  console.log(insertId);
  return insertId;
};

const insertSalesProducts = async ({ saleId, productId, quantity }) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUE(?, ?, ?)',
    [saleId, productId, quantity],
  );

  return saleId;
 };

module.exports = {
  insertSale,
 insertSalesProducts,
};  