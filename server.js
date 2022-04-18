require('dotenv').config();
require('./database');
const express = require('express');
const port = process.env.PORT;
const bodyParser = require('body-parser');
const motosRouter = require('./routes/motos.routes');

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
    res.send('<h1>Welcome to my server</h1>');
});

//http://localhost:8080/motos
app.use('/motos', motosRouter);

// running the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
