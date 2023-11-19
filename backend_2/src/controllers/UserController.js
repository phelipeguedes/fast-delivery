const UserModel = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { use } = require('../routes/routes');
const { where } = require('sequelize');

const secret = 'dasdsffgdfdbcvbbcvbfghfutyujghjhgj';

const UserController = {

  index: async(req, res) => {
    const users = UserModel.findAll();
    res.json(users);
  },

  create: async(req, res) => {

    console.log(req);

    try {

      const { name, email, password, role } = req.body;

      // criptografa a senha
      const passwordHash = await bcrypt.hash(password, 10);

      await UserModel.create({

        name: name,
        email: email,
        password: passwordHash,
        role: role

      }).then(() => {
        res.json({"message":"Usuário salvo com sucesso!!!"});
        res.status(200);
      }).catch((err) => {
        res.json({"message":"Ocorreu um erro. Não foi possível salvar o novo usuário: " + err});
        res.status(400);
      });

    } catch (error) {
      console.log(error);
      res.status(500);
    }
  },

  login: async(req, res) => {

    const { email, password } = req.body;

    try {

      const user = await UserModel.findOne({ where: {email:email}});

      if(user) {

        // compara a senha fornecida pelo usuário com a senha criptogarfada no banco
        await bcrypt.compare(password, user.password, (err, result) => {

          if(result) {
            res.status(200).json({"message":"Usuário(a) logado com sucesso!"});
          }

        });

      } else {
        res.status(404).json({"message":"Seu email ou senha estão incorretos. Corrija as informações e tente novamente"});
      }

    } catch (error) {
      res.status(500).json({"message":"Ocorreu um erro: " + error});
    }
  }
}

module.exports = UserController;
