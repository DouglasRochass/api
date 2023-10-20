const Sequelize = require('sequelize');
const sequelize = require('../db');

const Museu = sequelize.define('Museu', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
  },
  numero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descri: {
    type: Sequelize.STRING(1000),
  },
  img: {
    type: Sequelize.BLOB('long'),
  },
  historia: {
    type: Sequelize.STRING(1000),
  },
});

module.exports = Museu;
