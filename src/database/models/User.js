module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Users';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        }, 
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: dataTypes.BIGINT
        },
        date_birth: {
            type: dataTypes.DATEONLY
        },
        img: {
            type: dataTypes.STRING(500),
            defaultValue: 'images/logo1.jpg'
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        } 
    };

    let config = {
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define (alias, cols, config);

    User.associate = function (models) {
        User.belongsTo (models.User_Categories, {
            as: 'category',
            foreignKey: 'category_id'
        }),
        User.hasMany (models.Shopping_Carts, {
            as: 'shopping_carts',
            foreignKey: 'user_id'
        })
    }

    return User;
}