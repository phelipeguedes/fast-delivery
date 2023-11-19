const Sequelize = require('sequelize');
const connection = require('../database/db');

const RoleModel = connection.define('roles', {
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

RoleModel.sync({force: false}).then((result) => {
  console.log('Tabela roles criada com sucesso!');
}).catch((err) => {
  console.log('Ocorre um um erro: ' + err);
});

module.exports = RoleModel;
