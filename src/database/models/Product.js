const { Sequelize } = require(".")

module.exports = (sequelize, DataTypes)=>{
    const Product = Sequelize.define("Product",{
        idProd:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombreProd:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio:{
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        talle:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        idCategoria: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        imagen:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        tableName: "Products",
    });

    Product.associate = function(models){
        Product.belongto(models.ProductCategorie,{
            as: "Category",
            foringkey: "productcategorie_id",
        });
        Product.belongsToMany(models.User,{
            through: models.UserProduct,
            foreignKey:"product_id",
            otherKey:"user_id",
            as: "users",
        });
    }

    return Product;
}