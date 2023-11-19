const Sequelize = require('sequelize');
const connection = require('../database/db');

// model de pedidos
const OrderModel = connection.define('orders', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
