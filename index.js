import express from 'express';

import { pool } from './src/db/postgres/client.js';

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  const results = await pool.query('SELECT * FROM users;');
  res.json(results.rows);
});

app.listen(3000, () => {
  console.log('servidor iniciado na porta 3k');
});
