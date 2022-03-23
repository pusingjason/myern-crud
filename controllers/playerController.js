const db = require('../models');

const getPlayers = (request, response) => {
    try{
        db.Player.findAll({ 
            include: [db.Game]
        }).then(players => response.send(players));
    }catch(error){
        response.send(error);
    }
};

const getSinglePlayer = (request, response) => {
    try{
        db.Player.findAll({
            include: [db.Game],
            where: {
                id: request.params.id
            }
        }).then(submittedRequest => response.send(submittedRequest));
    }catch(error){
        response.send(error);
    }
};

const getIDFullName = (request, response) => {
    try{
        db.Player.findAll({
            attributes: [fullName]
        }).then(submittedRequest => response.send(submittedRequest));
    }catch(error){
        response.send(error);
    }
};

const checkExistingPlayer = (request, response) => {
    try{
        const cha = db.Player.findByID(request.params.id).then(submittedRequest => response.send(submittedRequest));
        console.log(cha);
    }catch(error){
        response.send(error);
    }
};

const addPlayer = (request, response) => {
    try{
        db.Player.create(request.body).then(submittedRequest => response.send(submittedRequest));
    }catch(error){
        response.send(error);
    }
};

const editPlayer = (request, response) =>{
    try{
        db.Player.update(request.body,{
            where: { 
                id: request.params.id 
            }
        }).then(() => response.send('Update Successfuly'));
    }catch(error){
        response.send(error);
    }
};

const deletePlayer = (request, response) => {
    try{
        db.Player.destroy({
            where: {
                id: request.params.id
            }
        }).then(() => response.send('Delete successful'));
    }catch(error){
        response.send(error);
    }
};

module.exports = {
    getPlayers,
    getSinglePlayer,
    checkExistingPlayer,
    getIDFullName,
    addPlayer,
    editPlayer,
    deletePlayer
}