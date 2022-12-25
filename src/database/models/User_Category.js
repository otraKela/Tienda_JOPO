module.exports = (sequelize, dataTypes) => {
    let alias = 'User_Categories';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        type: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };

    let config = {
        tableName: 'user_categories',
        timestamps: false
    };

    const User_Category = sequelize.define (alias, cols, config);

    User_Category.associate = function (models) {
        User_Category.hasMany (models.Users, {
            as: 'users',
            foreignKey: 'category_id'
        })
    }

    return User_Category;
}