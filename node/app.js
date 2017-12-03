var express = require('express')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
var path = require('path')
var cors = require('cors')
const route = require('./route');

mongoose.connect('mongodb://localhost:27017/movielist')
mongoose.connection.on('connected',()=>{
    console.log('connected to database mongo')
})
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('error connecting to database mongo')
    }
})

var app = express()

const port = 3000;

app.use(cors())

app.use(bodyparser.json())

app.use('/api',route)

app.listen(port,()=>{
    console.log("server started at port:"+port);
})