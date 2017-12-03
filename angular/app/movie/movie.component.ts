import { Action } from '@angular-cli/ast-tools/node_modules/rxjs/scheduler/Action';
import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {Movie} from '../movie';
import {Actor} from '../actor';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit {

  movies: Movie[]=[];
  _id : any;
  name: String;
  description:String;
  year_released:Number;
  rating:Number;
  actors:[String];
  directors:[String];
  urlstring: String;
  actorsinfo:Actor;
  showActor:boolean;
  show : boolean = false;
  id:any;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.movieService.getSelectedMovie(this.id)
    .subscribe(movie => {this.movies = movie;
      this._id=movie._id;
      this.name=movie.name;
      this.description=movie.description;
      this.year_released=movie.year_released;
      this.rating=movie.rating;
      this.actors=movie.actors;
      this.directors=movie.directors;
      this.urlstring=movie.urlstring;
    });
    console.log(this.id);
  }

  edit(){
    this.show = !this.show;
    this.showActor = false;
  }

  cancel(){
    this.show=false;
  }

  updateMovie(){
    const newMovie = {
      _id : this.id,
      name : this.name,
      description: this.description,
      year_released: this.year_released,
      rating: this.rating,
      actors: this.actors,
      directors: this.directors,
      urlstring: this.urlstring
    }
    console.log(newMovie._id);
    this.movieService.updateMovie(newMovie)
    .subscribe(movie => {this.movies=movie
    this.router.navigate(['/listmovies'])});
  }

  getActorInfo(actor){
    
    this.movieService.getActorInfo(actor)
    .subscribe(actor => {this.actorsinfo = actor
    this.showActor=true;
    this.show=false;});
  }
}
