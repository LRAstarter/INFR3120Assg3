let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Pokemon = require('../models/pokemon');

router.get('/',(req,res,next)=>{
    Pokemon.find((err, pokemonlist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('pokemon',{title: 'Pokemon List', Pokemonlist: pokemonlist})
        }

    })
})
module.exports=router;