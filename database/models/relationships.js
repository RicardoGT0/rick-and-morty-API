
module.exports = (database) => {
    const { Character, Episode, User, Favorite } = database.models

    Episode.belongsTo(Character, { foreignKey: 'id_character' });
    Favorite.belongsTo(User, { foreignKey: 'user_id' });
    Favorite.belongsTo(Character, { foreignKey: 'Character_id' });
}