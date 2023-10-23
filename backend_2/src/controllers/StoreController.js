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
          console.log(error);
          res.json(error);
        }
    },

    create: async(req, res) => {

        console.log(req);

        try {
          const {name, category, subcategory, deliveryEstimate, about, openingHours, email, phone} = req.body;

          // nome aleatório dado à imagem p/ salvar no banco
          // com o mesmo nome salvo no diretório de uploads
          // pra ser possível ela ser exibida na tela
          const image = req.file.filename;

          await StoreModel.create({
            name: name,
            category: category,
            subcategory: subcategory,
            delivery_estimate: deliveryEstimate,
            about: about,
            opening_hours: openingHours,
            phone: phone,
            email: email,
            image_path: `http://localhost:3000/uploads/${image}`

        }).then((result) => {
            res.json(result);
            res.status(200);
        }).catch((err) => {
            res.json({"message":"Ocorreu um erro. Não possível salvar o registro: ", err});
            res.status(400);
        });

      } catch (error) {
        console.log(error);
      }
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

    }

}

module.exports = StoreController;
