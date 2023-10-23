const express = require('express');
const cors = require('cors')

const bodyParser = require('body-parser');
const connection = require('./src/database/db');

const StoreModel = require('./src/models/Store');
const CategoryModel = require('./src/models/Category');
const SubcategoryModel = require('./src/models/Subcategory');
const DeliverymanModel = require('./src/models/Deliveryman');
const MenuModel = require('./src/models/Menu');

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// conexão com sequelize
connection.authenticate().then(() => {
    console.log('Conexão feita com sucesso!');
}).catch((error) => {
    console.log('ERRO: ', error);
});

// habilitando cors
app.use((req, res, next) => {

    // A API permite requisições de qualquer origem
    res.header("Access-Control-Allow-Origin", "*");
    // métodos que a API suporta
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    // A API permite o envio de dados
    res.header("Access-Control-Allow-Headers", "Content-Type");

    app.use(cors());

    // Se não houver erros, continua o fluxo
    next();
});

// rotas da API
const routes = require('./src/routes/routes');

// o prefixo api é utilizado, obrigatoriamente, antes de cada rota
app.use('/api', routes);

// permite a leitura das imagens armazenadas nesses diretórios
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'))
app.use('/src/assets/img', express.static('src/assets/img'));

app.listen(port, () => {
    console.log('Servidor rodando na porta: ', port);
})
