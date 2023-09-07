// ***** importando librerías *****
const path = require('path');
const fs = require('fs');

// ***** obteniendo el JSON de productos como objeto literal
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
        res.render("./products/productDetail",{product});
    },

    // métodos para CREAR PRODUCTOS
    crearProducto: (req, res) => {
        res.render('./products/createProduct');
    },

    guardarProducto: (req, res) => {        
		// ***** calculando el nuevo id *****
		let newProdID = (products[products.length - 1].idProd) + 1;

        console.log(req.file.filename);

		let newProduct = {
            idProd: newProdID,
            nombreProd: req.body.nombreProd,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            talle: req.body.talle,
            imagen: req.file.filename,
            categoría: req.body.categoria
		};


		// ***** añadiendo el nuevo producto a la lista *****
		products.push(newProduct);

		// ***** devolviendo la lista a su formato JSON original
		productsJSON = JSON.stringify(products);

		// ***** escribiendo el JSON actualizado al archivo
		fs.writeFileSync(path.join(__dirname,'../data/products.json'),productsJSON);

		res.redirect(`/products/item/${newProdID}`);
    },

    // métodos para EDITAR PRODUCTOS
    editarProducto: (req, res) => {
        let id = req.params.id;
        let producto = products.find(prod => prod.idProd == id);
        console.log(producto);
        res.render('./products/editProduct', {producto:producto});
    },

    actualizarProducto: (req, res) => {
        //código par actualizar un producto del JSON
        let id = +req.params.id;

        let producto = productos.find(prod => prod.idProd == id);
        if (producto) {
            producto.nombreProd = req.body.nombreProd;
            producto.precio = +req.body.precio;
            producto.talle = req.body.talle;
            producto.descripcion = req.body.descripcion;
            fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 2), 'utf-8');
            res.redirect('/products')
        }

    },

    // método para BORRAR PRODUCTOS
    borrarProducto: (req, res) => {
        //código para borrar un producto del JSON
    }
}

module.exports = productsController;