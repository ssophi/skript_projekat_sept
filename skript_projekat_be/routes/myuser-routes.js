const express=require('express');
const router=express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const { sequelize, Myuser } = require('../models');

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



//get one user by username
router.get('/:username', (req, res) => {
    Myuser.findAll({where: {username:req.params.username}})
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
})


//update user
router.put('/:username',(req,res) =>{
    const user = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password,10),
        ime: req.body.ime,
        prezime: req.body.prezime,
        email: req.body.email,
        tip_clanarine: req.body.tip_clanarine
    }
    
    Myuser.findAll({where: {username: req.params.username}, attributes: ['id']})
    .then (response =>{
        Myuser.update(user,{where: {id: response[0].id}})
        .then(num =>{
            if (num==1){
                res.send({message: "Uspesan update"});
            } else {
                res.send({message: "Nije dobar id"});
            }
        })
        .catch(err =>{res.status(500).json(err)}); 
    });
})

//delete user
router.delete('/:username', (req, res) =>{
    Myuser.destroy({where: {username: req.params.username}})
    .then(num =>{
        if (num==1){
            res.send({message: "Uspesno obrisan korisnik"});
        } else {
            res.send({message: "Nije moguce obrisati korisnika"});
        }
    })
    .catch(err =>{res.status(500).json(err)});
})

module.exports = router;