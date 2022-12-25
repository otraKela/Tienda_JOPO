module.exports=(Sequelize, DataTypes)=>{
    let alias='Shopping_Carts';

    let cols={
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        user_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        address_line1:{
            type: DataTypes.STRING,
        },
        address_line2:{
            type: DataTypes.STRING,
        },
        city:{
            type: DataTypes.STRING,
        },
        zip_code:{
            type: DataTypes.INTEGER,
        },
        payment_type:{
            type: DataTypes.INTEGER,
        }
    }


    let config={
        tableName:'shopping_cart',
        timestamps: false
    }

    const Shopping_Cart = Sequelize.define(alias,cols,config);

    Shopping_Cart.associate= function(models){
        Shopping_Cart.hasMany(models.Shopping_Cart_Details,{
            as:'shopping_cart_details',
            foreignKey:'shopping_cart_id'
        })
    }

    return Shopping_Cart;
}