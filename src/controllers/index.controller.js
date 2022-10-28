import { pool } from '../db.js'

export const ping = async (req, res) => {
  const [result] = await pool.query('SELECT 1 + 1 ')
  res.json(result[0])
}
