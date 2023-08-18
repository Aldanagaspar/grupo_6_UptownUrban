const express = require("express");
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/item', productsController.item);
//router.get('/item/:idProduct', productsController.item);
router.get('/', productsController.carrito);
router.get('/createProduct', productsController.create)

module.exports = router;