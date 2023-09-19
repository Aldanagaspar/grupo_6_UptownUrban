const express = require("express");
const router = express.Router();

const usersController = require('../controllers/usersController');
const productsController = require('../controllers/productsController');

router.get('/login', usersController.login);
router.get('/registro', usersController.register);

router.get('/:id/myProducts',productsController.listadoProductosUsuario);

router.get('/Profile', usersController.addUser);
router.post('/addUser',usersController.addUser);

module.exports = router;