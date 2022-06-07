import { DataTypes } from 'sequelize'

export default ({ sequelize }) => {

    sequelize.define('User', {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlpha: true
            }
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^998(9[012345789]|3[3]|7[1]|8[8])[0-9]{7}$/i
            }
        }
    }, {
        underscored: true,
        tableName: 'users'
    })

}