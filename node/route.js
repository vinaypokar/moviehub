const express = require('express')
const router = express.Router()
const Movie = require('./movies');
const Actor = require('./actors');
const Director = require('./directors');

//Routes for Movies
//retriving movies
router.get('/movies', async (req,res,next)=>{
    try{
        let pro= await Movie.find();
        res.json(pro);
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
});

//getting selected movie
router.get('/movies/:id',(req,res,next)=>{
	Movie.findById((req.params.id),(err,movies)=>{
		if(err)
			res.json({err:'error occured'});
		res.json(movies);
	});
});

//adding movie
router.post('/movie', (req,res,next)=>{
    let newMovie = new Movie({
        name: req.body.name,
        description: req.body.description,
        year_released: req.body.year_released,
        rating: req.body.rating,
        actors: req.body.actors,
        directors: req.body.directors,
        urlstring: req.body.urlstring
    })

    newMovie.save((err,movie)=>{
        if(err){
            res.json({msg: 'Failed to add Movie'})
        }
        else{
            res.json({msg: 'Movie added successfully'})
        }
    })
})

//updating movie
router.put('/updatemovie/:id',(req,res,next)=>{

    let newMovie=new Movie({
        _id:req.params.id,
        name: req.body.name,
        description: req.body.description,
        year_released: req.body.year_released,
        rating: req.body.rating,
        actors: req.body.actors,
        directors: req.body.directors

    });
    console.log(newMovie._id +" "+ newMovie.name+ " "+newMovie.description);

    Movie.update({_id:newMovie._id},{$set:{name:newMovie.name, description:newMovie.description,year_released:newMovie.year_released,rating:newMovie.rating,
                    actors:newMovie.actors,directors:newMovie.directors}},(err, movie)=>{
            if(err)
                res.json({msg: 'Failes to add movie'});
            else
                res.json({msg: 'Movie added successfully'});
    });
});

//deleting movie
router.delete('/movie/:id',(req,res,next)=>{
    Movie.remove({_id: req.params.id},(err,result)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
})



//Routes for Actors
//retriving actors
router.get('/actors',(req,res,next)=>{
    Actor.find((err,actors)=>{
        res.json(actors);
    });
});

//adding actor
router.post('/actor',(req,res,next)=>{
    let newActor = new Actor({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        acted_in: req.body.acted_in,
    })

    newActor.save((err,movie)=>{
        if(err){
            res.json({msg: 'Failed to add Actor'})
        }
        else{
            res.json({msg: 'Actor added successfully'})
        }
    })
})

//getting specific actor by id
router.get('/actors/:id',(req,res,next)=>{
    Actor.findById((req.params.id),(err,actors)=>{
        if(err)
            res.json({err:'error occured'});
        res.json(actors);
    });
});

//getting specific actor by name
router.get('/actor/:name',(req,res,next)=>{
    Actor.findOne({name:req.params.name},(err,actor)=>{
        if(err)
            res.json({err:'error occured'});
        res.json(actor);
    });
})


//Routes for Directors
//retriving directors
router.get('/directors',(req,res,next)=>{
    Director.find((err,directors)=>{
        res.json(directors);
    });
});

//adding director
router.post('/director',(req,res,next)=>{
    let newdirector = new Director({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        movies_directed: req.body.movies_directed,
    })

    newdirector.save((err,movie)=>{
        if(err){
            res.json({msg: 'Failed to add director'})
        }
        else{
            res.json({msg: 'director added successfully'})
        }
    })
})

//getting specific director by id
router.get('/directors/:id',(req,res,next)=>{
    Director.findById((req.params.id),(err,directors)=>{
        if(err)
            res.json({err:'error occured'});
        res.json(directors);
    });
});

//getting specific director by name
router.get('/director/:name',(req,res,next)=>{
    Director.findOne({name:req.params.name},(err,director)=>{
        if(err)
            res.json({err:'error occured'});
        res.json(director);
    });
})



module.exports = router;