const { request } = require('express');
const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/all', (request, response) => {
    db.Player.findAll().then(players => response.send(players));
});

router.get('/find/:id', (request, response) => {
    db.Player.findAll({
        where: {
            id: request.params.id
        }
    }).then(submittedRequest => response.send(submittedRequest));
});

router.post('/new', (request, response) => {
    db.Player.create({
        firstName: request.body.firstName,
        secondName: request.body.secondName
    }).then(submittedRequest => response.send(submittedRequest));
});

router.delete('/delete/:id', (request, response) => {
    db.Player.destroy({
        where: {
            id: request.params.id
        }
    }).then(() => response.send('Delete successful'));
});

router.put('/edit', (request, response) =>{
    db.Player.update(
        {
            firstName: request.body.firstName,
            secondName: request.body.secondName
        },
        {
            where: { id: request.body.id }
        }
    ).then(() => response.send('Update Successfuly'));
});

module.exports = router;