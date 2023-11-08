const db = require('../database/models/index');

const mainController = {
    index: async (req,res) => {
        try {
            const products = await db.Product.findAll({raw:true});
            return res.render('./index', {products})
        } catch(error) {
            console.log(error);
        }
    },
}
module.exports = mainController;