module.exports = (sequelize, DataTypes) => {
    const Score = sequelize.define('Score', {
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
    });
    return Score
};