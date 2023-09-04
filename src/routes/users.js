const express = require("express");
const router = express.Router();

const usersController = require('../controllers/usersController');
const productsController = require('../controllers/productsController');

router.get('/login', usersController.login);
router.get('/registro', usersController.register);

router.get('/:id/myProducts',productsController.listadoProductosUsuario);


module.exports = router;