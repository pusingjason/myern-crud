const db = require('../models');

const getGames = (request, response) => {
    try{
        db.Game.findAll().then(games => response.send(games));
    }catch(error){
        response.send(error);
    } 
};

const getSingleGame = (request, response) => {
    try{
        db.Game.findAll({
            where: {
                id: request.params.id
            }
        }).then(submittedRequest => response.send(submittedRequest));
    }catch(error){
        response.send(error);
    }
};

const addGame = (request, response) => {
    try{
        db.Game.create(request.body).then(submittedRequest => response.send(submittedRequest));
    }catch(error){
        response.send(error);
    }
};

const editGame = (request, response) => {
    try{
        db.Game.update(request.body,{
            where:{
                id: request.params.id
            }
        }).then(() => response.send('Updated Successfuly'));
    }catch(error){
        response.send(error);
    }
};

const deleteGame = (request, response) => {
    try{
        db.Game.destroy({
            where:{
                id: request.params.id
            }
        }).then(() => response.send('Deleted Successfuly'));
    }catch(error){
        response.send(error);
    }
};

module.exports = {
    getGames,
    getSingleGame,
    addGame,
    editGame,
    deleteGame
}