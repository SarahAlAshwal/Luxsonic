const Pool = require('pg').Pool;
require('dotenv').config()

const databaseConfig = require('./config/env');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT
});

module.exports = pool;