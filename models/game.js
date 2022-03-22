module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('Game', {
        name: {
            type: DataTypes.STRING,
            allowedNull: false
        },
        season: {
            type: DataTypes.INTEGER,
            allowedNull: false
        },
        champion: {
            type: DataTypes.INTEGER,
            allowedNull: false
        },
    });
    Game.associate = function(models) {
        Game.belongsToMany(models.Player, {through: 'PlayerGame', foreignKey: 'gameID'})
    };
    return Game
};