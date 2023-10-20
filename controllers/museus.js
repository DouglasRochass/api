const db = require('../db');

exports.listMuseus = (req, res) => {
 
  db.query('SELECT * FROM tb_Museu', (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.getMuseuById = (req, res) => {
  const museuId = req.params.id;
  
  db.query('SELECT * FROM tb_Museu WHERE idMuseu = ?', [museuId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Museu não encontrado' });
    }
    res.json(result[0]);
  });
};


