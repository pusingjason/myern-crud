const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 4000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/players', require('./routes/playerRoute'));
app.use('/api/games', require('./routes/gameRoute'));
app.use('/api/player-games', require('./routes/playerGameRoute'));

db.sequelize.sync().then(() => {
    app.listen(PORT, () =>{
        console.log(`listening to: http://localhost:${PORT}`);
    });
});