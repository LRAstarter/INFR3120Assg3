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
            res.render('./pokemon/list',{title: 'Coolest Pokemon List', Pokemonlist: pokemonlist})
        }

    })
})

//Add Operation
router.get('/add',(req,res,next)=> {
    res.render('./pokemon/add',{title:'Add Pokemon'})
});

router.post('/add',(req,res,next)=> {
    let newMon = Pokemon ({
        "_id":id,
        "name":req.body.name,
        "type1":req.body.type1,
        "type2":req.body.type2,
        "notes":req.body.notes
    })

    Pokemon.create(newMon,(err,Pokemon) =>{
        if(err)
        {
            console.log(err);
            res.end(err);

        }
        else
        {
            res.redirect('/pokemon/list')
        }


    })
    

});

//Edit Operation
router.get('/edit/:id',(req,res,next)=> {
    let id = req.params.id;
    Pokemon.findById(id,(err,monToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);

        }
        else
        {
            res.render('pokemon/edit', {title:'Edit Pokemon', pokemon: monToEdit})
        }
    })


});
router.post('/edit/:id',(req,res,next)=> {
    let id=req.params.id;
    let updateMon = Pokemon ({
        "_id":id,
        "name":req.body.name,
        "type1":req.body.type1,
        "type2":req.body.type2,
        "notes":req.body.notes

    })
    Pokemon.updateOne({_id:id},updateMon,(err) =>{
        if(err)
        {

            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/pokemon/list')
        }

    });
});

//Delete Operation

router.get('/delete/:id',(req,res,next) => {
    let id = req.params.id;
    Pokemon.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/pokemon-list');
        }

    })


})


module.exports=router;