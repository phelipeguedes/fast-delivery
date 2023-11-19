const Sequelize = require('sequelize');
const connection = require('../database/db');

// model com os campos para criação da tabela
const StoreModel = connection.define('stores', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    subcategory: {
        type: Sequelize.STRING,
        allowNull: false
    },
    delivery_estimate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    about: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    opening_hours: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    email: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    image_path: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// criação da tabela stores
StoreModel.sync({force: false}).then(() => {
    console.log('Tabela lojas criada com sucesso!');
}).catch((err) => {
    console.log('Ocorreum um erro: ' + err);
});

module.exports = StoreModel;
