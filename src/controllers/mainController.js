const db = require('../database/models/index');

const mainController = {
    index: async (req,res) => {
        try {
            const products = await db.Product.findAll({raw:true});
            const categories = await db.ProductCategorie.findAll({raw:true});
            const categorias = categories.map(category => category.categoria)
            return res.render('./index', {products, categorias})
            // return res.json(categorias)
            // res.send(categorias)
        } catch(error) {
            console.log(error);
        }
    },
}
module.exports = mainController;