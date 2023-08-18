const productsController = {
    carrito: (req,res) => {
        res.render("./products/productCart");
    },
    item: (req,res) => {
        let idProduct = req.params.id;
        res.render("./products/productDetail");
    },
    create: (req,res) => {
        res.render('./products/createProduct')
    }
}

module.exports = productsController;