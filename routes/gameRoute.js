const express = require('express');
const router = express.Router();

const {
    getGames,
    getSingleGame,
    addGame,
    editGame,
    deleteGame
} = require('../controllers/gameController');

router.route('/').get(getGames).post(addGame);
router.route('/:id').get(getSingleGame).put(editGame).delete(deleteGame);

module.exports = router;