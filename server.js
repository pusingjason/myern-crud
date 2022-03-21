const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 4000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes/playerRoutes'));

db.sequelize.sync().then(() => {
    app.listen(PORT, () =>{
        console.log(`listening to: http://localhost:${PORT}`);
    });
});