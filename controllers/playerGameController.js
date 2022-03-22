const db = require('../models');

const getPlayerGames = (request, response) => {
    try{
        db.PlayerGame.findAll().then(games => response.send(games));
    }catch(error){
        response.send(error);
    } 
};

const getSinglePlayerGame = (request, response) => {
    try{
        db.PlayerGame.findAll({
            where: {
                id: request.params.id
            }
        }).then(submittedRequest => response.send(submittedRequest));
    }catch(error){
        response.send(error);
    }
};

const addPlayerGame = (request, response) => {
    try{
        db.PlayerGame.create(request.body).then(submittedRequest => response.send(submittedRequest));
    }catch(error){
        response.send(error);
    }
};

const editPlayerGame = (request, response) => {
    try{
        db.PlayerGame.update(request.body,{
            where:{
                id: request.params.id
            }
        }).then(() => response.send('Updated Successfuly'));
    }catch(error){
        response.send(error);
    }
};

const deletePlayerGame = (request, response) => {
    try{
        db.PlayerGame.destroy({
            where:{
                id: request.params.id
            }
        }).then(() => response.send('Deleted Successfuly'));
    }catch(error){
        response.send(error);
    }
};

module.exports = {
    getPlayerGames,
    getSinglePlayerGame,
    addPlayerGame,
    editPlayerGame,
    deletePlayerGame
}