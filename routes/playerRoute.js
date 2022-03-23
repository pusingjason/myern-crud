const express = require('express');
const router = express.Router();

const { 
    getPlayers,
    getSinglePlayer,
    checkExistingPlayer,
    getIDFullName, 
    addPlayer,
    editPlayer,
    deletePlayer
} = require('../controllers/playerController');

router.route('/').get(getPlayers).post(addPlayer);
router.route('/:id').get(getSinglePlayer).put(editPlayer).delete(deletePlayer);
router.route('/find/:id').get(checkExistingPlayer);
router.route('/fullname').get(getIDFullName);

module.exports = router;