const path = require('path');
const fs = require('fs');

const db = require('../database/models/index');
const { Op } = require('sequelize');


const productsController = {    
    listadoProductos: async (req, res) => {
        try {
            const products = await db.Product.findAll({raw:true});
            return res.render('./products/productsList', {products: products})
        } catch(error) {
            console.log(error);
        }
    },
    buscarProducto: async (req,res) => { // No funciona
        const textInput = req.body.search;
        try {
            const searchProduct = await db.Product.findAll({
                where: {
                    nombreProd: {[Op.like]: `%${textInput}%`}
                }
            })

            if (searchProduct.length > 1) {
                return res.render('./products/productsList', {products: searchProduct})
            } else {
                return res.render('./products/productsList', {product: searchProduct})
            }

        } catch(error) {
            return res.json(error)
        }
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
    item: async (req,res) => {
        try {
            const product = await db.Product.findByPk(req.params.id);
            return res.render('./products/productDetail', {product});
        } catch(error) {
            console.log(error);
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
            res.redirect('products')
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
            return res.redirect('products')
        } catch(error) {
            console.log(error);
        }
    },
}

module.exports = productsController;