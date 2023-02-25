const { DataTypes } = require('sequelize');

const Favorite = (database) => {
    database.define('Favorite', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Character_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
        {
            timestamps: false
        });
}

module.exports = Favorite