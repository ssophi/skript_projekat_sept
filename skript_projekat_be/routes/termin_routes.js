const express = require('express');
const { sequelize, Users, Messages } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

function authToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.status(401).json({ msg: 'Not authenticated' });
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    
        if (err) return res.status(403).json({ msg: err });
    
        req.user = user;
    
        next();
    });
}

route.use(authToken);

//get one termin by id
route.get('/termin/:id', (req, res) => {
    MyUser.getById({artUsername: req.params.username, include: ['user']})
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
})

//get all termini
route.get('/termin', (req, res) => {
    MyUser.getAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
})

//create termin
route.post('/termin', (req, res) => {
    MyUser.createTermin({artUsername: req.params.username, include: ['user']})
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
})

//update termin
route.put('/termin', (req, res) => {
    MyUser.updateTermin({artUsername: req.params.username, include: ['user']})
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
})

//delete termin
route.delete('/termin', (req, res) => {
    MyUser.deleteTermin({artUsername: req.params.username, include: ['user']})
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
})

//reset slobodnih termina
route.get('/termin/reset', (req, res) => {
    Messages.reset({ where: { artId: req.params.id }, include: ['user'] })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
});

module.exports = route;