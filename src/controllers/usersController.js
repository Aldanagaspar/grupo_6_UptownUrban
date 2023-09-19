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
            let newUserID = (user[user.length - 1].idUser) + 1;
    
            console.log(req.file.filename);
            let newUser = {
                idUser: newUserID,
                nameUser: req.body.nameUserUser,
                descripcion: req.body.descripcion,
                imagen: req.file.filename,
                categoría: req.body.categoria
            };
    }
}

module.exports = usersController;