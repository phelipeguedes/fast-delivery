const Sequelize = require('sequelize');
const connection = require('../database/db');

// model de entregador
const DeliverymanModel = connection.define('delivery_men', {
    name: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.STRING
    },
    date_of_birth: {
        type: Sequelize.DATE
    },
    cpf: {
        type: Sequelize.STRING
    },
    identity: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    neighborhood: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    image_path: {
        type: Sequelize.STRING
    }
}); 

DeliverymanModel.sync({force: false}).then(() => {
    console.log('Tabela de entregadores criada com sucesso!');
});

module.exports = DeliverymanModel;