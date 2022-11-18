let mongoose = require('mongoose')

let pokemonModel = mongoose.Schema({
    name: String,
    type1: String,
    type2: String,
    weight: String,
    height: String
    },
    {
        collection: "Holder"
    }

)
module.exports = mongoose.model('Pokemon', pokemonModel);