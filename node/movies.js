const mongoose = require('mongoose')

const MoviesSchema = mongoose.Schema({
    name:{
        type: String,
        requried: true,
        unique: true
    },
    description:{
        type:String
    },
    year_released:{
        type:Number
    },
    rating:{
        type:Number
    },
    actors:{
        type:[String]
    },
    directors:{
        type:[String]
    },
    urlstring:{
        type:String
    }
})

const Movies = module.exports = mongoose.model('Movies',MoviesSchema)