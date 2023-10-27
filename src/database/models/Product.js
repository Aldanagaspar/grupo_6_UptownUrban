module.exports = (sequelize, DataTypes)=>{
    const Product = sequelize.define("Product",{
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
        tableName: "Product",
    });

    Product.associate = function(models){
        Product.belongto(models.ProductCategorie,{
            as: "Category",
            foreingkey: "idCategoria",
        });
        Product.belongsToMany(models.User,{
            through: models.UserProduct,
            foreignKey:"idProd",
            otherKey:"id",
            as: "users",
        });
    }

    return Product;
}