const Sequelize = require('sequelize');
const connection = require('../database/db');

// criação da tabela categories
const CategoryModel = connection.define('categories', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

CategoryModel.sync({force: false}).then(() => {
    console.log('Tabela categorias criada com sucesso!');
});

module.exports = CategoryModel;
