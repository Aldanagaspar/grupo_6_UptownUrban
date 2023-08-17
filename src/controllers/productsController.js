const productsController = {
    carrito: (req,res) => {
        res.render("./products/productCart");
    },
    item: (req,res) => {
        let idProduct = req.params.id;
        res.render("./products/productDetail");
    }
}

module.exports = productsController;