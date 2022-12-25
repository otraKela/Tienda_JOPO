

module.exports= (Sequelize, DataTypes)=>{
    let alias='Shopping_Cart_Details';

    let cols={
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        shopping_cart_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        discount:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING(500),
            defaultValue: 'images/default_product.jpg'
        },
       
    }

    let config={
        tableName:'shopping_cart_detail',
        timestamps:false
    }

    const Shopping_Cart_Detail=Sequelize.define(alias,cols,config);

    Shopping_Cart_Detail.associate= function(models){

        Shopping_Cart_Detail.belongsTo(models.Shopping_Carts,{
            as:'shopping_cart',
            foreignKey:'shopping_cart_id'
        })


        // Shopping_Cart_Detail.hasMany (models.Products,{
        //     as:'products',
        //     foreignKey:'product_id'
        // })
}

    return Shopping_Cart_Detail;
}