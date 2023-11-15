const router = require('express').Router();
const multer = require('multer');
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
router.get('/store/:id', StoreController.getStoreById);
router.get('/stores/:id/menu', MenuController.index);

// salva o novo registro e faz upload das imagens
router.post('/new-store', upload.single('image_path'), StoreController.create);
// edita um registro existente e faz o upload da imagem
router.put('/update-store/:id', upload.single('image_path'), StoreController.update);
router.delete('/delete-store/:id', StoreController.delete);
router.post('/new-deliveryman', upload.single('image_path'), DeliverymenController.create);

module.exports = router;
