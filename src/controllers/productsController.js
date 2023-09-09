const path = require('path');
const fs = require('fs');

const productsFilePath = path.resolve(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = {    
    listadoProductos: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
        res.render('./products/productsList',{products:products});
    },    
    listadoProductosUsuario: (req, res) => {
        res.render('./products/myProducts', {
            titulo: 'Tus Productos - Used Fashion',
            css: 'productsList'
        });
    },
    carrito: (req,res) => {
        res.render("./products/productCart", {
            titulo: "Tu carrito - Uptown Urban",
            css: "productCart"
        });
    },
    item: (req,res) => {
        let idProduct = parseInt(req.params.id, 10);
        let product = products.find((p) => p.idProd == idProduct);
        
        if(product){
            res.render("./products/productDetail",{product});
        } else {
            res.render("../views/error-producto", {id: req.params.id});
        }
    },
    crearProducto: (req, res) => {
        res.render('./products/createProduct');
    },
    guardarProducto: (req, res) => {        
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
    editarProducto: (req, res) => {
        let id = +req.params.id;
        const product = products.find(prod => prod.idProd == id);
        res.render('./products/editProduct', {product:product});
    },
    actualizarProducto: (req, res) => {
        let productIndex = products.findIndex(prod => prod.idProd == req.params.id);

        if(productIndex != -1){
            products[productIndex].nombreProd = req.body.nombreProd;
            products[productIndex].precio = +req.body.precio;
            products[productIndex].talle = req.body.talle;
            products[productIndex].descripcion = req.body.descripcion;
            products[productIndex].imagen = req.file.filename;
            products[productIndex].categoria = req.body.categoria;   
        }

		// ***** devolviendo la lista a su formato JSON original
		productsJSON = JSON.stringify(products);

		// ***** escribiendo el JSON actualizado al archivo
		fs.writeFileSync(path.join(__dirname,'../data/products.json'),productsJSON);
        res.redirect('/products/')
    },
    borrarProducto: (req, res) => {
        //código para borrar un producto del JSON
        let id = +req.params.id;
        const datosActualizados = products.filter(producto => producto.idProd != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(datosActualizados,null,2), 'utf-8');
        res.redirect('/products');
    }
}

module.exports = productsController;