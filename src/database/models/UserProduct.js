module.exports = (sequelize, DataTypes)=>{
    const UserProduct = Sequelize.define("UserProduct",{
        cantidad:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        tablename: "UserProduct",
    })

    return UserProduct
}