const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const usersFilePath = path.resolve(__dirname, '../data/users.json');


const usersController = {
    login: (req,res) => {
        res.render("./users/login", {
            titulo: 'Iniciá Sesión - Used Fashion',
            css: 'login'
        });
    },
    register: (req,res) => {
        res.render("./users/register", {
            titulo: 'Creá tu cuenta - Used Fashion',
            css: 'login'
        });
    },
    addUser: (req, res) => {
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))
        const newUser = {
            idUsuario : users[users.length - 1] + 1,
            nombreCompleto: req.body.fullname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
        }
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users))
        res.render('./users/profile', {users:users})
    }
}

module.exports = usersController;