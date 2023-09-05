const express = require("express");
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/cart', productsController.carrito);

// ***** RUTAS DEL CRUD *****
// *** rutas para OBTENER PRODUCTOS ***
router.get('/',productsController.listadoProductos);
router.get('/item/:id/', productsController.item);

// *** rutas para AGREGAR PRODUCTOS ***
router.get('/create/', productsController.crearProducto);
router.post('/', productsController.guardarProducto);

// *** rutas para EDITAR PRODUCTOS ***
router.get('/edit/:id/', productsController.editarProducto);
router.put('/:id/', productsController.actualizarProducto);

// *** rutas para BORRAR PRODUCTOS ***
router.delete('/:id', productsController.borrarProducto);

module.exports = router;