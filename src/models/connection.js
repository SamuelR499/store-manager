const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT || 3306,
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'StoreManager',
});
module.exports = connection;