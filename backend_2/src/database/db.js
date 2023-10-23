const Sequelize = require('sequelize');

// conexão com o postgres (nome do banco, usuário, senha, host e dialeto)
const connection = new Sequelize('fast_delivery', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;