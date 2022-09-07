const express=require('express');
const router=express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const { sequelize, Trening } = require('../models');

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

// route.use(authToken);

//get treninzi
router.get('/', (req, res) => {
    Trening.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
});

module.exports = router;