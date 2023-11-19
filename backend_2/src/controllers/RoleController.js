const RoleModel = require('../models/Role');

class RoleController {

  async index(req, res) {
    const roles = await RoleModel.findAll();
    res.json(roles);
  }
}

module.exports = new RoleController();
