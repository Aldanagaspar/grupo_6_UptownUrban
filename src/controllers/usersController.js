const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const db = require('../database/models/index')

const User = require('../models/User');

const usersFilePath = path.resolve(__dirname, '../data/users.json');

const usersController = {
    loginView: (req,res) => {
        res.render("./users/login", {
            titulo: 'Iniciá Sesión - Used Fashion',
            css: 'login'
        });
    },
    registerView: (req,res) => {
        res.render("./users/register", {
            titulo: 'Creá tu cuenta - Used Fashion',
            css: 'login'
        });
    },
    register: (req, res) => {
        let resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('./users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

        let usersFile = fs.readFileSync(usersFilePath, 'utf-8')
        let users;
        let userToCreate = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            profilePicture: req.file.filename
        };

        if (usersFile == "") {
            users = [];
            fs.writeFileSync(usersFilePath, JSON.stringify(users,null,' '), 'utf-8');
            User.create(userToCreate);
            return res.redirect('/users/login')
        } else {
            User.create(userToCreate);
            return res.redirect('/users/login');
        };
    },
    login: (req,res) => {
        let userToLogin = User.getUserByField('email',req.body.email);

        if (userToLogin) {
            let verifyPassword = bcrypt.compareSync(req.body.password, userToLogin.password);
            if (verifyPassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                return res.redirect('/users/profile')
            } else {
                res.send('Credenciales inválidas')
            }
        } else {
            res.send("El usuario no existe")
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
    }
}

module.exports = usersController;