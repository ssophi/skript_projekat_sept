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

//get one user by username
route.get('/user/:username', (req, res) => {
    MyUser.getByUsername({artUsername: req.params.username, include: ['user']})
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
})

//create user
route.post('/user', (req, res) => {
    MyUser.createUsername({artUsername: req.params.username, include: ['user']})
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
})

//update user
route.put('/user/:id', (req, res) => {
    MyUser.updateUsername({artUsername: req.params.username, include: ['user']})
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
})

//delete user
route.delete('/user/:id', (req, res) => {
    MyUser.deleteUsername({artUsername: req.params.username, include: ['user']})
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
})

module.exports = route;