const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const usersFilePath = path.resolve(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))


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
    profile: (req,res) => {
        const id = req.params.id;
        const user = users.find(u => u.idUsuario == id)
        res.render('./users/profile', {user:user})
    },
    addUser: (req, res) => {
        const newUser = {
            idUsuario : (users[users.length - 1].idUsuario + 1),
            fullname: req.body.fullname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            profilePicture: req.file.filename
        }
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users))
        res.redirect('/users/profile/'+newUser.idUsuario)
    }
}

module.exports = usersController;