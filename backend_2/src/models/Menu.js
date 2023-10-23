const Sequelize = require('sequelize');
const connection = require('../database/db');

const MenuModel = connection.define('menu', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  store_id: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image_path: {
    type: Sequelize.STRING,
    allowNull: false
  }

});

MenuModel.sync({force:false}).then(() => {
  console.log('Tabela menu criada com sucesso!');
}).catch((err) => {
  console.log(err);
});

module.exports = MenuModel;
