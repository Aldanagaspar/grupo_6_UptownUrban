const { Sequelize } = require(".")

module.exports = (sequelize, DataTypes)=>{
    const User = Sequelize.define("User",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fullname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        profilePicture:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        tablename: "Users",
    });

    User.associate = function(models){
        User.belongsToMany(models.Product,{
            through: models.UserProduct,
            foreignKey:"user_id",
            otherKey:"product_id",
            as: "products",
        });
    }

    return User;
}