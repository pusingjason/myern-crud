const db = require('../models');

const getPlayers = (request, response) => {
    db.Player.findAll().then(players => response.send(players));
};

const getSinglePlayer = (request, response) => {
    db.Player.findAll({
        where: {
            id: request.params.id
        }
    }).then(submittedRequest => response.send(submittedRequest));
};

const addPlayer = (request, response) => {
    db.Player.create({
        firstName: request.body.firstName,
        secondName: request.body.secondName
    }).then(submittedRequest => response.send(submittedRequest));
};

const editPlayer = (request, response) =>{
    db.Player.update(
        {
            firstName: request.body.firstName,
            secondName: request.body.secondName
        },
        {
            where: { id: request.params.id }
        }
    ).then(() => response.send('Update Successfuly'));
};

const deletePlayer = (request, response) => {
    db.Player.destroy({
        where: {
            id: request.params.id
        }
    }).then(() => response.send('Delete successful'));
};

module.exports = {
    getPlayers,
    getSinglePlayer,
    addPlayer,
    editPlayer,
    deletePlayer
}