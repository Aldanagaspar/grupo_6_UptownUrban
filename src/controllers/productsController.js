const path = require('path');
const fs = require('fs');

const db = require('../database/models/index');


const productsController = {    
    listadoProductos: async (req, res) => {
        
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
    guardarProducto: async (req, res) => {        
        try {
            const productCategory = await db.ProductCategorie.findOne({where:{categoria: req.body.categoria}})
            const saveProduct = await db.Product.create({
                nombreProd: req.body.nombreProd,
                descripcion: req.body.descripcion,
                precio: +req.body.precio,
                talle: req.body.talle,
                idCategoria: productCategory.idCategoria,
                imagen: req.file.filename
            });
            const productsAll = await db.Product.findAll();
            res.render('./products', {products: productsAll})
        } catch(error) {
            console.log(error);
        }
    },
    editarProducto: async (req, res) => {
        const product = await db.Product.findByPk(req.params.id, {include:['Category']});
        res.render('./products/editProduct', {product:product});
    },
    actualizarProducto: async (req, res) => {
        try {
            const productCategory = await db.ProductCategorie.findOne({where: {categoria: req.body.categoria}});
            const productUpdate = await db.Product.update({
                    nombreProd: req.body.nombreProd,
                    descripcion: req.body.descripcion,
                    precio: +req.body.precio,
                    talle: req.body.talle,
                    idCategoria: productCategory.idCategoria,
                    imagen: req.file.filename
            }, {
                where: {idProd: req.params.id}
            });
        } catch (error) {
            console.log(error);
        }
    },
    borrarProducto: async (req, res) => {
        try {
            const deleteProduct = await db.Product.destroy({
                where: {idProd: req.params.id}
            });
        } catch(error) {
            console.log(error);
        }
    },
}

module.exports = productsController;