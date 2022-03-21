module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('Player', {
        firstName: {
            type: DataTypes.STRING,
            allowedNull: false
        },
        secondName: {
            type: DataTypes.STRING,
            allowedNull: false
        }
    });
    return Player
};