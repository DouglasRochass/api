const db = require('../db');

exports.listObras = (req, res) => {
  const museuId = req.params.museuId;
  
  db.query('SELECT * FROM tb_obra WHERE idMuseu = ?', [museuId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};
