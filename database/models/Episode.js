const { DataTypes } = require('sequelize');

const Episode = (database) => {
    database.define('Episode', {
        id_character: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        num_episode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
        {
            timestamps: false
        });
}

module.exports = Episode