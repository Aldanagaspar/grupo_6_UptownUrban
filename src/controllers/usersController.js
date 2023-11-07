const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const db = require('../database/models/index');

const {User} = require('../database/models/User.js');

const usersFilePath = path.resolve(__dirname, '../data/users.json');

const usersController = {
    loginView: (req,res) => {
        res.render("./users/login", {
            titulo: 'Iniciá Sesión - Used Fashion',
            css: 'login'
        });
    },
    registerView: async(req,res) => {
        const users = await db.User.findAll();
        res.render("./users/register", {
            titulo: 'Creá tu cuenta - Used Fashion',
            css: 'login'
        });
    },
    register: async (req, res) => {
        try{
            let resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                return res.render('./users/register', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                })};
            const users = await db.User.create({
                fullname: req.body.fullname,
                email : req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                profilePicture: req.body.profilePicture,
            })
            return res.render("./users/login")
        }
        catch (error) {
            console.error('Error', error);}
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await db.User.findOne({ where: { email } });
    
            if (!user) {
                return res.send('El usuario no existe');
            }
    
            const isPasswordValid = bcrypt.compareSync(password, user.password);
    
            if (!isPasswordValid) {
                return res.send('Contraseña incorrecta');
            }
    
            req.session.userLogged = user;
            return res.redirect('/users/profile');
        }
        catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    },
    profile: (req,res) => {
        res.render('./users/profile', {
            user: req.session.userLogged
        });
    },
    logout: (req,res) => {
        req.session.destroy();
        res.redirect('/')
    },
    editView: (req,res) => {
        res.render("./users/edit", {
            titulo: 'Edita Perfil - Used Fashion',
            css: 'login',
            user: req.session.userLogged,
        });
    },
    edit: async (req,res) => {
        try {
            const email = req.session.userLogged.email;
            const { fullname, password, profilePicture } = req.body;
        
            const users = await db.User.findByPk(email);
            users.fullname = fullname;
            users.password = bcrypt.hashSync(password, 10);
            users.profilePicture = profilePicture;
            await users.save();
        
            return res.render("./users/profile")
          } catch (error) {
            return res.status(500).json({ message: error.message });
          }
}};
module.exports = usersController;