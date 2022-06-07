import { DataTypes } from 'sequelize'

export default ({ sequelize }) => {

    sequelize.define('Product', {
        product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlpha: true
            }
        },
        from:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        where: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        quantity: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }, {
        underscored: true,
        tableName: 'products',
        updatedAt:false
    })

}

