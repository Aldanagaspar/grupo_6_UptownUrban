const express = require("express");
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/item', productsController.item);
router.get('/cart', productsController.carrito);
router.get('/',productsController.listadoProductos);
router.get('/createProduct', productsController.crearProducto);
router.get('/createProduct/:idProducto', productsController.editarProducto);

module.exports = router;