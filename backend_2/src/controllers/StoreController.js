const { async } = require("rxjs/internal/scheduler/async");
const StoreModel = require("../models/Store");

const StoreController = {

    index: async(req, res) => {

        try {

            const response = await StoreModel.findAll({
              order: [
                ['name', 'ASC']
              ]
            });

            if(response.length > 0) {
              res.json(response);
            } else {
              res.json(0);
            }

        } catch (error) {
          res.json(error);
        }
    },

    create: async(req, res) => {

        try {

          const {name, category, subcategory, delivery_estimate, about, opening_hours, email, phone} = req.body;

          // nome aleatório dado à imagem p/ salvar no banco
          // com o mesmo nome salvo no diretório de uploads
          // pra ser possível ser exibida na tela
          const image = req.file.filename;

          await StoreModel.create({
            name, category, subcategory, delivery_estimate,
            about, opening_hours, phone, email,
            image_path: `http://localhost:3000/uploads/${image}`

        }).then(() => {
            res.status(200).json('Registro criado com sucesso!!!');
        }).catch((err) => {
            res.json({"message":"Ocorreu um erro. Não possível salvar o registro: ", err});
            res.status(400);
        });

      } catch (error) {
        res.json({"message":"Ocorreu um erro. Não possível salvar o registro: ", err});
        res.status(500);
      }
    },

    update: async(req, res) => {

      const id = req.params.id;
      const image = req.file.filename;

      const {name, category, subcategory, about, delivery_estimate, opening_hours, email, phone} = req.body;

      const store = await StoreModel.findByPk(id);

      if(!store) {
        res.statusCode(404).json('Registro não encontrado');
      }

      await StoreModel.update({
        name,
        category,
        subcategory,
        about,
        delivery_estimate,
        opening_hours,
        email,
        phone,
        image_path: `http://localhost:3000/uploads/${image}`},

        {where: {id: id}}

      ).then(() => {
        res.status(200).json('Registro alterado com sucesso!!!');
      }).catch((err) => {
        res.status(400).json('Ocorreu um erro. Não foi possível atualizar o registro: ' + err);
      });
    },

    delete: async(req, res) => {

      const id = req.params.id;

      await StoreModel.destroy({where: {id: id}}, {

      }).then(() => {
        res.status(200).json('Registro deletado com sucesso!!!');
      }).catch((err) => {
        res.status(400).json('Ocorreu um erro. Não foi possível deletar o registro: ' + err);
      });
    },

    getRestaurants: async(req, res) => {

      try {

        const response = await StoreModel.findAll({
          where: {
            category: '1'
          },
          order: [
            ['name', 'ASC']
          ]
        });

        if(response.length == 0) {
          res.json('Nenhum registro foi encontrado');
          return;
        }

        res.json(response);

      } catch(err) {
        res.json(err);
        console.log(err);
      }
    },

    getDrinksStores: async(req, res) => {

      try {

        const response = await StoreModel.findAll({
          where: {
            category: '2'
          },
          order: [
            ['name', 'ASC']
          ]
        });

        if(response.length == 0) {
          res.json('Nenhum registro foi encontrado');
          return;
        }

        res.json(response);

      } catch (err) {
        res.json(err);
        console.log(err);
      }
    },

    getMarkets: async(req, res) => {

      try {
        const response = await StoreModel.findAll({
          where: {
            category: '3'
          },
          order: [
            ['name', 'ASC']
          ]
        });

        if(response.length == 0) {
          res.json('Nenhum registro foi encontrado');
          return;
        }

        res.json(response);

      } catch (err) {
        console.log(err);
      }
    },

    getBakeries: async(req, res) => {

      try {

        const response = await StoreModel.findAll({
          where: {
            category: '4'
          },
          order: [
            ['name', 'ASC']
          ]
        });

        if(response.length == 0) {
          res.json('Nenhum registro foi encontrado');
          return;
        }

        res.json(response);

      } catch(err) {
        console.log(err);
      }

    },

    getStoreById: async(req, res) => {
      console.log(req.params.id)

      const id = req.params.id;

      if(isNaN(id)) {
        res.statusCode = 400;
        res.end('Erro: Informe um valor numérico');
      }

      try {

        const store = await StoreModel.findByPk(id);

        if(store == null) {
          res.statusCode = 404;
          res.end('Loja não encontrada');
        } else {
          res.statusCode = 200;
          res.json(store);
        }

      } catch (error) {
        console.log(error);
        res.json(error);
      }
    }

}

module.exports = StoreController;
