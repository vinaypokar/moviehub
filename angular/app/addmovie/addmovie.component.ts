import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {Movie} from '../movie';
@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css'],
  providers: [MovieService]
})
export class AddmovieComponent implements OnInit {

  movies: Movie[]=[];
  name: String;
  description:String;
  year_released:Number;
  rating:Number;
  actor:String;
  director:String;
  actors:[String];
  directors:[String];
  urlstring:String;
  constructor(private movieService: MovieService, private router: Router) { }

  addMovie(){
    const newMovie = {
      name : this.name,
      description: this.description,
      year_released: this.year_released,
      rating: this.rating,
      actors: this.actor.split(","),
      directors: this.director.split(","),
      urlstring: this.urlstring
    }
    this.movieService.addMovie(newMovie)
    .subscribe(movie => {
      this.movies.push(movie);
      this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
    });
    this.router.navigate(['/listmovies']);
  }

  ngOnInit() {
  }

}
