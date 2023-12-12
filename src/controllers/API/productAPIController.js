const db = require('../../database/models/index');
const fs = require('fs');
const path = require('path');

const productAPIController = {
    product: async (req, res) => {
        try{
            const Data = await db.Product.findByPk(req.params.id, {
                attributes:["nombreProd","descripcion","precio","talle","idCategoria","imagen"],
                raw:true
            });
            const product ={
                nombreProd: Data.nombreProd,
                descripcion: Data.descripcion,
                precio: Data.precio,
                talle: Data.talle,
                idCategoria: Data.idCategoria,
                imagen: req.protocol + '://' + req.get('host') + '/img/products/' + Data.imagen
            }
            return res.status(200).json(product)
        }
        catch(error){
            res.json(error)
        }
    },
    products: async (req, res) => {
        try{
            const Data = await db.Product.findAll({
                attributes:["idProd","nombreProd","descripcion","precio","talle","idCategoria","imagen"],
                raw:true
            });
            const products = Data.map(product => ({
                ...product,
                detail: req.protocol + '://' + req.get('host') + '/api' + req.url + '/' + product.idProd 
            }))
            return res.status(200).json({
                count: products.length,
                products
            })
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Ha ocurrido un error.', errorDetails: error });
        }
    }
}

module.exports =productAPIController;