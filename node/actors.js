const mongoose = require('mongoose')

const ActorsSchema = mongoose.Schema({
    name:{
        type: String,
        requried: true,
        unique: true
    },
    age:{
        type: Number
    },
    gender:{
        type: String
    },
    acted_in:{
        type:[String]
    }
})

const Actors = module.exports = mongoose.model('Actors',ActorsSchema);
