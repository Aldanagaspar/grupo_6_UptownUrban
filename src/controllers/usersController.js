const usersController = {
    login: (req,res) => {
        res.render("./users/login");
    },
    register: (req,res) => {
        res.render("./users/register");
    },

    listadoProductos: (req, res) => {
        //obtener listado de productos
        res.render('./users/myProducts');
    },

    crearProducto: (req, res) => {
        res.render('./users/createProduct');
    },

    editarProducto: (req, res) => {
        let idProducto = req.query.idProd;
        res.render('./users/createProduct', idProducto);
    }
}

module.exports = usersController;