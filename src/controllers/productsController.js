const productsController = {
    carrito: (req,res) => {
        res.render("./products/productCart",{
            titulo: 'Tu Carrito - Used Fashion',
            css: 'productCart'
        });
    },
    
    item: (req,res) => {
        let idProduct = req.params.id;
        res.render("./products/productDetail", {
            titulo: 'Producto - Used Fashion',
            css: 'productDetail'
        });
    },
    
    listadoProductos: (req, res) => {
        res.render('./products/myProducts', {
            titulo: 'Tus Productos - Used Fashion',
            css: 'myProducts'
        });
    },

    crearProducto: (req, res) => {
        res.render('./products/createProduct', {
            titulo: 'Crear Producto - Used Fashion',
            css: 'createProduct'
        });
    },

    editarProducto: (req, res) => {
        let idProducto = req.query.idProd;
        res.render('./products/createProduct', {
            titulo: 'Editar Producto - Used Fashion',
            css: 'createProduct'
        }, idProducto);
    }
}

module.exports = productsController;