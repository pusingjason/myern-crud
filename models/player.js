module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('Player', {
        firstName: {
            type: DataTypes.STRING,
            allowedNull: false
        },
        secondName: {
            type: DataTypes.STRING,
            allowedNull: false
        },
        form: {
            type: DataTypes.STRING,
            allowedNull: false
        },
        influence: {
            type: DataTypes.STRING,
            allowedNull: true
        },
        creativity: {
            type: DataTypes.STRING,
            allowedNull: false
        },
        threat: {
            type: DataTypes.STRING,
            allowedNull: false
        },
        ictIndex: {
            type: DataTypes.INTEGER,
            allowedNull: true
        }
    });
    Player.associate = function(models) {
        Player.belongsToMany(models.Game, {through: 'PlayerGame', foreignKey: 'playerID'})
    };
    return Player
};