const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const express = require('express');
const app = express();

const StoreController = require('../controllers/StoreController');
const UserController = require('../controllers/UserController');
const CategoryController = require('../controllers/CategoryController');
const SubcategoryController = require('../controllers/SubcategoryController');
const DeliverymenController = require('../controllers/DeliverymenController');
const MenuController = require('../controllers/MenuController');
const RoleController = require('../controllers/RoleController');

/* rotas da API */

router.get('/stores', StoreController.index);
router.get('/restaurants', StoreController.getRestaurants);
router.get('/drinks', StoreController.getDrinksStores);
router.get('/bakeries', StoreController.getBakeries);
router.get('/markets', StoreController.getMarkets);
router.get('/categories', CategoryController.index);
router.get('/subcategories', SubcategoryController.index);
router.get('/roles', RoleController.index);
router.get('/deliverymen', DeliverymenController.index);
router.get('/store/:id', StoreController.getStoreById);
router.get('/stores/:id/menu', MenuController.index);

// login
router.post('/login', UserController.login);

// cadastra um novo usuário(a)
router.post('/new-user', UserController.create);
// salva uma loja e faz upload das imagens
router.post('/new-store', upload.single('image_path'), StoreController.create);
// edita uma loja existente e faz o upload da imagem
router.put('/update-store/:id', upload.single('image_path'), StoreController.update);
// deleta uma loja
router.delete('/delete-store/:id', StoreController.delete);
// cadastra um novo entregador
router.post('/new-deliveryman', upload.single('image_path'), DeliverymenController.create);
// cadastra um novo pedido
router.post('new-order')

module.exports = router;
