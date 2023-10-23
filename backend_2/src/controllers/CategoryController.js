const CategoryModel = require('../models/Category');

class CategoryController {

    async index(req, res) {
        const categories = await CategoryModel.findAll();
        res.json(categories);
    }
}

module.exports = new CategoryController();