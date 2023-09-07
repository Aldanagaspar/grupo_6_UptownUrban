const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');

const productsController = require('../controllers/productsController');

const storage = multer.diskStorage({
    destination:path.join(__dirname, '../../public/img/products'), 
    filename: (req, file, cb) =>{
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

router.get('/cart', productsController.carrito);

// ***** RUTAS DEL CRUD *****
// *** rutas para OBTENER PRODUCTOS ***
router.get('/',productsController.listadoProductos);
router.get('/item/:id/', productsController.item);

// *** rutas para AGREGAR PRODUCTOS ***
router.get('/create/', productsController.crearProducto);  
router.post('/', upload.single('imagen'), productsController.guardarProducto);

// *** rutas para EDITAR PRODUCTOS ***
router.get('/edit/:id/', productsController.editarProducto);
router.put('/edit/:id/', productsController.actualizarProducto);

// *** rutas para BORRAR PRODUCTOS ***
router.delete('/:id', productsController.borrarProducto);

module.exports = router;