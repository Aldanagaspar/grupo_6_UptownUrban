const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');

const db = require('../database/models/index');

const usersController = require('../controllers/usersController');
const productsController = require('../controllers/productsController');

const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

const validations = [
    body('fullname').notEmpty().withMessage('El nombre no puede estar vacío.').bail()
    .isLength({min:5}).withMessage('El nombre y apellido deber ser mínimo 5 caracteres.'),
    body('email').notEmpty().withMessage('El email no puede estar vacío.').bail()
    .isEmail().withMessage('El formato de correo es inválido.').bail()
    .custom(async email => {
        const existingUser = await db.User.findOne({where:{email:email}});
        if (existingUser) {
            throw new Error('Este email ya está registrado.')
        } else return true;
    }),
    body('password').notEmpty().withMessage('La contraseña no puede estar vacía.').bail()
    .isLength({min:8}).withMessage('La contraseña debe tener mínimo 8 caracteres').bail()
    // .matches() agrupa las condionces para la contrasña
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/)
    .withMessage('La contraseña debe contener al menos una letra mayúscula, una minúscula, un número y un caracter especial.'),
    body('profilePicture').custom((value, {req}) => {
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
    destination:path.join(__dirname, '../../public/img/users'), 
    filename: (req, file, cb) =>{
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

router.get('/profile', authMiddleware,usersController.profile);
router.get('/profile/edit',authMiddleware,usersController.editView)
router.put('/profile/edit', upload.single('profilePicture'),usersController.edit);

router.get('/register', guestMiddleware,usersController.registerView);
router.post('/register', upload.single('profilePicture'), validations,usersController.register);

router.get('/:id/myProducts',productsController.listadoProductosUsuario);

router.get('/login', guestMiddleware,usersController.loginView);
router.post('/login', validations,usersController.login);

router.get('/logout', usersController.logout);

module.exports = router;