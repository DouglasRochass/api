const express = require('express');
const router = express.Router();
const pool = require('../db'); // Importe o pool de conexões

router.get('/museus', async (req, res) => {
  try {
    const [rows, fields] = await pool.execute('SELECT idMuseu, nome, endereco, email, numero, descri, img, historia FROM tb_Museu')
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar dados do banco de dados:', error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados.' });
  }
})
module.exports = router;

