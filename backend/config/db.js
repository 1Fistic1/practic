const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', 
  host: 'localhost', 
  database: 'login_postgres',   
  password: 'root', 
  port: 5432, 
});

module.exports = pool;
