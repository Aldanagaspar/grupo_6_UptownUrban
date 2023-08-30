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

    listadoProductos: (req, res) => {
        //obtener listado de productos
        res.render('./users/myProducts', {
            titulo: 'Tus Productos - Used Fashion',
            css: 'myProducts'
        });
    },

    crearProducto: (req, res) => {
        res.render('./users/createProduct', {
            titulo: 'Crear Producto - Used Fashion',
            css: 'createProduct'
        });
    },

    editarProducto: (req, res) => {
        let idProducto = req.query.idProd;
        res.render('./users/createProduct', {
            titulo: 'Editar Producto - Used Fashion',
            css: 'createProduct'
        }, idProducto);
    }
}

module.exports = usersController;