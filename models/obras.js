const Sequelize = require('sequelize');
const sequelize = require('../db');

const Obra = sequelize.define('Obra', {
  nome_obra: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descri_obra: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  imagem: {
    type: Sequelize.BLOB('long'),
  },
  data_obra: {
    type: Sequelize.DATE,
  },
});

module.exports = Obra;
