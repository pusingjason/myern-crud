const express = require('express');
const router = express.Router();

const { 
    getPlayers,
    getSinglePlayer, 
    addPlayer,
    editPlayer,
    deletePlayer
} = require('../controllers/playerController');

router.route('/').get(getPlayers).post(addPlayer);
router.route('/:id').get(getSinglePlayer).put(editPlayer).delete(deletePlayer);

module.exports = router;