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

module.exports = {
  getProducts,
  getProductId,
};