const express = require('express');
const router = express.Router();
const Motorcycle = require('../models/motorcycles');

// register a motorcyle into database with postman
router.post('/register', (req, res) => {
    const moto = new Motorcycle(req.body);

    moto.save();
    return res.send({_id: moto._id});
});

//http://localhost:8080/motos/all
router.get('/all/', async (req, res) => {
    const models = await Motorcycle.find().all();

    return res.send(models);
});

// http://localhost:8080/motos/First%Model/ for example
router.get('/:name', (req, res) => {
    Motorcycle.findOne({ name: req.params.name })
    .then(moto => res.send(moto))
    .catch(err => res.send(err));
});


module.exports = router;