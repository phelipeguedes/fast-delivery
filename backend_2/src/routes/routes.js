const router = require('express').Router();
const multer = require('multer');
const uploadImages = require('../config_upload_images/multer');
const upload = multer({ dest: 'uploads/' });

const express = require('express');
const app = express();

const StoreController = require('../controllers/StoreController');
const CategoryController = require('../controllers/CategoryController');
const SubcategoryController = require('../controllers/SubcategoryController');
const DeliverymenController = require('../controllers/DeliverymenController');
const MenuController = require('../controllers/MenuController');

/* rotas da API */

router.get('/stores', StoreController.index);
router.get('/restaurants', StoreController.getRestaurants);
router.get('/drinks', StoreController.getDrinksStores);
router.get('/bakeries', StoreController.getBakeries);
router.get('/markets', StoreController.getMarkets);
router.get('/categories', CategoryController.index);
router.get('/subcategories', SubcategoryController.index);
router.get('/deliverymen', DeliverymenController.index);
router.get('/stores/:id/menu', MenuController.index);

// salva os registros e faz upload das images
router.post('/new-store', upload.single('image_path'), StoreController.create);
router.post('/new-deliveryman', upload.single('image_path'), DeliverymenController.create);

module.exports = router;
