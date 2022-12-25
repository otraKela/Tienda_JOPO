module.exports = (sequelize, dataTypes) => {

    let alias = 'Products';

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
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL,
            allowNull: false,

        },
        discount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        special: {
            type: dataTypes.INTEGER
        },
        img: {
            type: dataTypes.STRING(500),
            defaultValue: 'images/default_product.jpg'
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName: 'products',
        timestamps: false
    }


    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Product_Categories, {
            as: "product_category",
            foreignKey: "category_id"
        }),

        Product.belongsToMany(models.Colors, {
            as: "colors",
            through: 'product_colors',
            foreignKey: 'product_id',
            otherKey: 'color_id',
            timestamps: false
        })

        // Product.belongsTo (models.Shopping_Cart_Details, {
        //     as: "shopping_cart_detail",
        //     foreignKey: "product_id"
        //     })
        
    };


    return Product;
};