const { DataTypes } = require('sequelize');

const User = (database) => {
    database.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
        {
            timestamps: false
        });
}

module.exports = User