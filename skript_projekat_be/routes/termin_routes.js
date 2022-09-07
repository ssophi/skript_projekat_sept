const express=require('express');
const router=express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const { Op } = require("sequelize");

const { sequelize, Termin, Masaza, Trening, Prostorija } = require('../models');

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


//get slobodne masaze
router.get('/sm/:dan', (req, res) =>{
    Termin.findAll({
        include: [{
            model: Masaza
        }],
        where: {dan: req.params.dan, masazaId:{[Op.ne]: null}, slobodna: {[Op.gt]: 0} }
    })
    .then  (rows => res.json(rows) )
    .catch( err => res.status(500).json(err) );
})

//get slobodni treninzi
router.get('/st/:dan', (req, res) =>{
    Termin.findAll({
        include: [{
            model: Trening
        }],
        where: {dan: req.params.dan,  treningId:{[Op.ne]: null}, slobodna: {[Op.gt]: 0} }
    })
    .then  (rows => res.json(rows) )
    .catch( err => res.status(500).json(err) );
})

//reset slobodnih mesta
router.put('/reset', (req, res) => {
    let termini;

        Termin.findAll({where: {treningId: {[Op.ne]: null}}})
        .then (data => {termini=data
            termini.forEach( term => {
               Prostorija.findOne({
                include:[{
                    model: Trening,
                    where: {id:term.treningId}
                }]
               })
               .then (data =>{
               const novitermin= {
                id: term.id,
                dan: term.dan,
                sati_od: term.sati_od,
                sati_do: term.sati_do,
                treningId: term.treningId,
                masazaId: term.masazaId,
                slobodna: data.kapacitet
               };
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

        Termin.findAll({where: {masazaId: {[Op.ne]: null}}})
        .then (data => {termini=data
            termini.forEach( term => {
               Prostorija.findOne({
                include:[{
                    model: Masaza,
                    where: {id:term.masazaId}
                }]
               })
               .then (data =>{
               const novitermin= {
                id: term.id,
                dan: term.dan,
                sati_od: term.sati_od,
                sati_do: term.sati_do,
                treningId: term.treningId,
                masazaId: term.masazaId,
                slobodna: data.kapacitet
               };
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
        termini=[{message : "sve vraceno"}]
        res.send(termini);
        
})

module.exports = router;