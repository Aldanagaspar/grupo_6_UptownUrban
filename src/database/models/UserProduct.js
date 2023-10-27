module.exports = (sequelize, DataTypes)=>{
    const UserProduct = sequelize.define("UserProduct",{
        cantidad:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        tableName: "UserProduct",
    })

    return UserProduct
}