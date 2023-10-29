module.exports = (sequelize, DataTypes)=>{
    const UserProduct = sequelize.define("UserProduct",{
        cantidad:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        tableName: "usersproducts",
        timestamps: false
    })

    return UserProduct
}