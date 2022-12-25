module.exports = (sequelize, dataTypes) => {

    let alias = 'Product_Colors';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    
        color_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName: 'product_colors',
        timestamps: false
    };

    const Product_Color = sequelize.define(alias, cols, config);

    return Product_Color;
};