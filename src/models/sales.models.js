const connection = require('./connection');

const insertSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUE(NOW())',
  );
  return insertId;
};

const insertSalesProducts = async ({ saleId, productId, quantity }) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUE(?, ?, ?)',
    [saleId, productId, quantity],
  );

  return saleId;
};

const getSales = async () => { 
  const [result] = await connection.execute(
    `SELECT 
      sp.sale_id AS saleId,
      sales.date,
      sp.product_id AS productId,
      sp.quantity
    FROM sales_products as sp
    JOIN sales ON sp.sale_id = sales.id
    ORDER BY saleId, productId`,
  );
  return result;
};

async function getSaleById(saleId) {
  const [result] = await connection.execute(
    `SELECT
      date, 
      product_id AS productId,
      quantity
    FROM sales_products as sp
    JOIN sales ON id = sp.sale_id
    WHERE id = ?
    ORDER BY productId`, [saleId],
  );
  return result;
}

module.exports = {
  insertSale,
  insertSalesProducts,
  getSales,
  getSaleById,
};  