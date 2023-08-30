const productsController = {
    carrito: (req,res) => {
        res.render("./products/productCart",{
            titulo: 'Tu Carrito - Used Fashion',
            css: 'productCart'
        });
    },
    
    item: (req,res) => {
        let idProduct = req.params.id;
        res.render("./products/productDetail", {
            titulo: 'Producto - Used Fashion',
            css: 'productDetail'
        });
    }
}

module.exports = productsController;