const express = require('express');
const router = express.Router();

const {
    getPlayerGames,
    getSinglePlayerGame,
    addPlayerGame,
    editPlayerGame,
    deletePlayerGame
} = require('../controllers/playerGameController');

router.route('/').get(getPlayerGames).post(addPlayerGame);
router.route('/:id').get(getSinglePlayerGame).put(editPlayerGame).delete(deletePlayerGame);

module.exports = router;