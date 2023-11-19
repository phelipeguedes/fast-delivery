const sequelize = require('sequelize');
const connection = require('../database/db');

const UserModel = connection.define('users', {
  name: {
    type: sequelize.STRING,
    allowNull: false
  },
  email: {
    type: sequelize.STRING,
    allowNull: false
  },
  password: {
    type: sequelize.STRING,
    allowNull: false
  },
  role: {
    type: sequelize.INTEGER,
    allowNull: false
  }
});

UserModel.sync({force: false}).then(() => {
  console.log('Tabela usuários criada com sucesso!!!');
}).catch((err) => {
  console.log(err);
});

module.exports = UserModel;
