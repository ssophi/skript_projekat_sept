const express=require('express');
const router=express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const { Op } = require("sequelize");

const { sequelize, Termin, Myuser, Rezervacija } = require('../models');

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

// napravi rezervaciju
router.post('/',(req, res) => {
    let korId;
    Myuser.findOne({where: {username:req.body.username}})
    .then (kor => {
        korId=kor.id
        const rez ={
            korisnikId: korId,
            terminId: req.body.terminId
        }
        
        Rezervacija.create(rez)
        .then (data => {
            Termin.findOne({where: {id: req.body.terminId}})
            .then(trm => {
                const novitermin={
                    id: trm.id,
                    dan: trm.dan,
                    sati_od: trm.sati_od,
                    sati_do: trm.sati_do,
                    treningId: trm.treningId,
                    masazaId: trm.masazaId,
                    slobodna: trm.slobodna-1
                }
                Termin.update(novitermin, {where: {id: novitermin.id}})
               .then(num =>{
                   if (num==1){
                       console.log("Uspesan update");
                   } else {
                       console.log("Nije dobar id");
                   }
               })
               .catch(err =>{res.status(500).json(err)}); 

            })
        })
    
    })
    .catch (err => res.status(500).json(err));

    res.send("uspesano kreirana rezervacija");

})

module.exports = router;