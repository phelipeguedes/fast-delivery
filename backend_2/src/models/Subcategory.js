const { Sequelize } = require('sequelize');
const connection = require('../database/db');

// criação da tabela subcategories
const SubcategoryModel = connection.define('subcategories', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

SubcategoryModel.sync({force: false}).then(() => {
    console.log('Tabela subcategorias criada com sucesso!');
}).catch((err) => {
    console.log('ERRO: ', err);
});

module.exports = SubcategoryModel;