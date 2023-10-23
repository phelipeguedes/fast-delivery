const { Pool } = require('pg');

const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'fast_delivery',
    password: '123456',
    port: 5432
});

try{    
    connection.connect();
} catch (error){
    console.log('ERRO: ', error)
}

module.exports = connection;