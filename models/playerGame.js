module.exports = (sequelize, DataTypes) => {
    const PlayerGame = sequelize.define('PlayerGame', {
        gameID: {
            type: DataTypes.INTEGER,
            allowedNull: false
        },
        playerID: {
            type: DataTypes.INTEGER,
            allowedNull: false
        },
        totalScore: {
            type: DataTypes.INTEGER,
            allowedNull: false
        },
        teamPlayers: {
            type: DataTypes.STRING,
            allowedNull: true
        }
    });
    PlayerGame.associate = function(models) {
        PlayerGame.belongsTo(models.Player, {foreignKey: 'playerID'})
        PlayerGame.belongsTo(models.Game, {foreignKey: 'gameID'})
    };
    return PlayerGame
};