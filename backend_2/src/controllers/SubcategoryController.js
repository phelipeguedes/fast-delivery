const SubcategoryModel = require("../models/Subcategory");

class SubcategoryController {

    async index (req, res) {
        const subcategories = await SubcategoryModel.findAll();
        res.json(subcategories);
    }
}

module.exports = new SubcategoryController();