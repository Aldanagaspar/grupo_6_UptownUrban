// ***** importando librerías *****
const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    // métodos para OBTENER productos (GET)
    
    listadoProductos: (req, res) => {
        res.render('./products/productsList',{products});
    },    
    
    listadoProductosUsuario: (req, res) => {
        res.render('./products/myProducts', {
            titulo: 'Tus Productos - Used Fashion',
            css: 'productsList'
        });
    },

    carrito: (req,res) => {
        res.render("./products/productCart",{
            titulo: 'Tu Carrito - Used Fashion',
            css: 'productCart'
        });
    },
    
    item: (req,res) => {
        let idProduct = parseInt(req.params.id, 10);
        let product = products.find((p) => p.idProd == idProduct);
        console.log(product)
        res.render("./products/productDetail",{product});
    },

    // métodos para CREAR PRODUCTOS
    crearProducto: (req, res) => {
        res.render('./products/createProduct', {
            titulo: 'Crear Producto - Used Fashion',
            css: 'createProduct'
        });
    },

    guardarProducto: (req, res) => {
        //código para guardar un producto en el JSON
    },

    // métodos para EDITAR PRODUCTOS
    editarProducto: (req, res) => {
        let idProducto = req.query.idProd;
        res.render('./products/createProduct', {
            titulo: 'Editar Producto - Used Fashion',
            css: 'createProduct'
        }, idProducto);
    },

    actualizarProducto: (req, res) => {
        //código par actualizar un producto del JSON
    },

    // método para BORRAR PRODUCTOS
    borrarProducto: (req, res) => {
        //código para borrar un producto del JSON
    }
}

module.exports = productsController;