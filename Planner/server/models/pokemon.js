let mongoose = require('mongoose')

let pokemonModel = mongoose.Schema({
    name: String,
    type1: String,
    type2: String,
    notes: String
    },
    {
        collection: "Holder"
    }

)
module.exports = mongoose.model('Pokemon', pokemonModel);