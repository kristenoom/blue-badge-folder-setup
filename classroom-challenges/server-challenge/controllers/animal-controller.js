var express = require('express');
var router = express.Router();
let validateSession = require('../middleware/validate-session');
var sequelize = require('../db');
var Animal = sequelize.import('../models/animal');

router.post('/create', (req, res) => {
    const animalEntry = {
        userId: req.body.userId,
        name: req.body.name,
        legNumber: req.body.legNumber,
        predator: req.body.predator,
    };
    Animal.create(animalEntry)
    .then((animal) => res.status(200).json(animal))
    .catch((err) => res.status(500).json({error: err}));
});

//RETURN ALL ANIMALS
router.get('/', validateSession, (req, res) => {
    const query = { where: { userId: req.params.userId }}
    Animal.findAll()
    .then((animals) => res.status(200).json(animals))
    .catch((err) => res.status(500).json({error: err}));
});

//DELETE ENTRY
router.delete('/delete/:name', validateSession, (req, res) => {
    const query = {where: {id: req.params.userId, userId: req.user.id}};

    Animal.destroy(query)
    .then(()=> res.status(200).json({message: 'Animal removed from database.'}))
    .catch((err) => res.status(500).json({error: err}));
});

//UPDATE ENTRY
router.put('/update/:name', validateSession, function (req, res){
    const updateAnimalEntry = {
        userId: req.body.userId,
        name: req.body.name,
        legNumber: req.body.legNumber,
        predator: req.body.predator
    };
    const query = { where: {name: req.params.name}};

    Animal.update(updateAnimalEntry, query)
    .then((animals) => res.status(200).json({message: 'Entry updated!'}))
    .catch((err) => res.status(500).json({error:err}));
});

module.exports = router;

//db.authenticate()