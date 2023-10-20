const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'museus.mysql.database.azure.com',
  user: 'Douglas',
  password: 'batata5.',
  database: 'museus',
  ssl:{mode: 'require'}
});

// pool.connect((err) => {
//   if (err) {
//     console.error('Erro ao conectar ao banco de dados: ' + err.message);
//   } else {
//     console.log('Conexão com o banco de dados estabelecida');
//   }
// });

module.exports = pool;

