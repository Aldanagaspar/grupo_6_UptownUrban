const express = require("express");
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/login', usersController.login);
router.get('/registro', usersController.register);
router.get('/myProducts',usersController.listadoProductos);
router.get('/myProducts/createProduct', usersController.crearProducto);
router.get('/myProducts/createProduct/:idProducto', usersController.editarProducto);

module.exports = router;