const express=require('express');
const router=express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const { Op } = require("sequelize");

const { sequelize, Termin, Myuser } = require('../models');
const Rezervacija = require('../models/Rezervacija');

router.use(express.json());
router.use(express.urlencoded({extended: true}));

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

router.use(authToken);

// rezervisi trening
router.post('/rt',(req, res) => {
    let korId;
    Myuser.findOne({where: {username:req.body.username}})
    .then (kor => korId=kor.id)
    .catch (err => res.status(500).json(err));

    const rez ={
        korisnikId: korId,
        terminId: req.body.terminId
    }

    Rezervacija.create(rez)
    .then (data => {
        //smanji slobodno
    })

})

module.exports = router;