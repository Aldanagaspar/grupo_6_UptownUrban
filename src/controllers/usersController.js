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
                profilePicture: req.file.filename,
            })
            return res.render("./users/login")
        }
        catch (error) {
            console.error('Error', error);
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await db.User.findOne({ where: {email} });
    
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
    profile: async (req,res) => {
        try {
            const user = await db.User.findOne({where: {email: req.session.userLogged.email}})
            return res.render('./users/profile', {user});
        } catch(error) {
            console.log(error);
        }
    },
    logout: (req,res) => {
        req.session.destroy();
        res.redirect('/')
    },
    editView: async (req,res) => {
        try {
            const user = await db.User.findOne({where: {email: req.session.userLogged.email}});
            res.render("./users/edit", {
                titulo: 'Edita Perfil - Used Fashion',
                css: 'login',
                user: user,
            });
        } catch(error) {
            console.log(error);
        }
    },
    edit: async (req,res) => {
        try {
            const userToUpdate = await db.User.findOne({where: {email: req.session.userLogged.email}});
            let dataFile = req.file;
            let userFile;
            if (dataFile) {
                userFile = verifyFile.filename;
            } else {
                userFile = userToUpdate.profilePicture;
            }

            const userUpdate = await db.User.update({
                fullname: req.body.fullname,
                password: bcrypt.hashSync(req.body.password, 10),
                profilePicture: userFile
            }, {where: {id: userToUpdate.id}});

            res.redirect('/users/profile')

          } catch (error) {
            return res.status(500).json({ message: error.message });
          }
    }
};
module.exports = usersController;