const express = require('express');
const router = express.Router();
const pool = require('../db'); // Importe o pool de conexões

router.get('/obras/:idMuseu', async (req, res) => {
  const museuId = req.params.idMuseu;

  try {
    const [rows, fields] = await pool.execute('SELECT idObra, nome_obra, descri_obra, imagem, data_obra, idMuseu FROM tb_obra WHERE idMuseu = ?', [museuId]);
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar dados do banco de dados:', error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados.' });
  }
});

module.exports = router;
