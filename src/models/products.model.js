const connection = require('./connection');

const getProducts = async () => { 
  const [result] = await connection.execute(
        'SELECT * FROM products ORDER BY id',
  );
  return result;
};

const getProductId = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return result;
};

const insertProduct = async (productName) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) values (?)',
    [productName],
  );

  return insertId;
};

module.exports = {
  getProducts,
  getProductId,
  insertProduct,
};