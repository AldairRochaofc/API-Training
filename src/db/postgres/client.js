import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
  user: 'root',
  password: 'password',
  database: 'financeapp',
  port: 5432,
  host: 'localhost',
});
