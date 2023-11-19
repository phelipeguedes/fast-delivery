const DeliverymanModel = require('../models/Deliveryman');

const DeliverymenController = {

    index: async(req, res) => {

        try {
            const response = await DeliverymanModel.findAll();

            console.log(response)

            if(response.length == 0)
                res.json('Nenhum registro foi encontrado');

            res.json(response);

        } catch (error) {
            console.log(error);
        }
    },

    create: async(req, res) => {

        console.log(req);

        try {
            const {name, gender, date_of_birth, cpf, identity, phone, email, cep, address, neighborhood, city, state} = req.body

            // nome aleatório dado à imagem p/ salvar no banco
            // com o mesmo nome salvo no diretório de uploads
            // pra ser possível ela ser exibida na tela
            const image = req.file.filename;

            await DeliverymanModel.create({
                name: name,
                gender: gender,
                date_of_birth: date_of_birth,
                cpf: cpf,
                identity: identity,
                phone: phone,
                email: email,
                cep: cep,
                address: address,
                neighborhood: neighborhood,
                city: city,
                state: state,
                image_path: `http://localhost:3000/uploads/${image}`

            }).then((result) => {
                res.json(result);
                res.status(200);
            }).catch((err) => {
                res.json({"message":"Ocorreu um erro. Não foi possível salvar o entregador: " + err});
                res.status(400);
            });

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = DeliverymenController;
