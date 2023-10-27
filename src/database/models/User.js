module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define("User",{
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
        tableName: "User",
    });

    User.associate = function(models){
        User.belongsToMany(models.Product,{
            through: models.UserProduct,
            foreignKey:"id",
            otherKey:"idProd",
            as: "products",
        });
    }

    return User;
}