const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(bodyParser.json());

// conexão com pg
const db = require('./db')

app.listen(port, () => {
    console.log('Servidor rodando na porta: ', port);
})
