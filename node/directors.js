const mongoose = require('mongoose')

const DirectorsSchema = mongoose.Schema({
    name:{
        type: String,
        requried: true
    },
    age:{
        type: Number
    },
    gender:{
        type: String
    },
    movies_directed:{
        type:[String]
    }
})

const Directors = module.exports = mongoose.model('Directors',DirectorsSchema);