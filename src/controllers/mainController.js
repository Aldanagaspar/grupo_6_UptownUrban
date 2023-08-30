const path = require("path");

let nombrePaginas = {
    index: 'index',
}

const mainController = {
    index: (req,res) => {
        res.render("index", {
            titulo: 'Used Fashion',
            css: 'index'
        });
    },
}
module.exports = mainController;