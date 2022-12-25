module.exports = (sequelize, dataTypes) => {

    let alias = 'Product_Categories';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
    
        img: {
            type: dataTypes.STRING(500),
            defaultValue: 'images/default_categorie.jpg'
        }
    };

    let config = {
        tableName: 'product_categories',
        timestamps: false
    }

    const Product_Category = sequelize.define(alias, cols, config);

    Product_Category.associate = function(models) {
        Product_Category.hasMany(models.Products, { 
            as: "products", 
            foreignKey: "category_id"
        })
    }


    return Product_Category;
};