const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');

const { body } = require('express-validator');

const productsController = require('../controllers/productsController');

const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

const validations = [
    body('nombreProd').notEmpty().withMessage('El nombre del producto no puede estar vacío.').bail()
    .isLength({min:5}).withMessage('El nombre debe tener al menos 5 caracteres.'),
    body('precio').notEmpty().withMessage('El precio no puede estar vacío.').bail()
    .isNumeric().withMessage('El campo solo debe contener números.'),
    body('categoria').notEmpty().withMessage('Debes seleccionar una categoria.'),
    body('talle').notEmpty().withMessage('Debes especificar un talle para el producto'),
    body('descripcion').notEmpty().withMessage('La descripción no puede estar vacía.').bail()
    .trim().isLength({min:20}).withMessage('La descripción deberá contar con al menos 20 caracteres.'),
    body('imagen').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg','.jpeg','.png','.gif']
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
            }
        }
        return true;
    })
]

const storage = multer.diskStorage({
    destination:path.join(__dirname, '../../public/img/products'), 
    filename: (req, file, cb) =>{
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

router.get('/cart', authMiddleware,productsController.carrito);

// ***** RUTAS DEL CRUD *****
// *** rutas para OBTENER PRODUCTOS ***
router.get('/',productsController.listadoProductos);
router.get('/item/:id', productsController.item);

// *** rutas para AGREGAR PRODUCTOS ***
router.get('/create/', authMiddleware,productsController.crearProducto);  
router.post('/', upload.single('imagen'), validations,productsController.guardarProducto);

// *** rutas para EDITAR PRODUCTOS ***
router.get('/edit/:id/', authMiddleware,productsController.editarProducto);
router.put('/edit/:id/', upload.single('imagen'), validations,productsController.actualizarProducto);

/* Ruta para BUSCAR PRODUCTOS */
router.post('/search', productsController.buscarProducto)

// *** rutas para BORRAR PRODUCTOS ***
router.delete('/:id', productsController.borrarProducto);


module.exports = router;