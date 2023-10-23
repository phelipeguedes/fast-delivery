const { async } = require('rxjs/internal/scheduler/async');
const MenuModel = require('../models/Menu');

const MenuController = {

  index: async(req, res) => {

    const store_id = req.params.id;

    try {

      const response = await MenuModel.findAll({
        where: {
          store_id: store_id
        }
      });

      if(response.length == 0) {
        res.json('Nenhum registro encontrado');
        return;
      }

      res.json(response);

    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = MenuController;
