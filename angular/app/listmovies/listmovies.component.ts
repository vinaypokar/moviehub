import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {Movie} from '../movie';

@Component({
  selector: 'app-listmovies',
  templateUrl: './listmovies.component.html',
  styleUrls: ['./listmovies.component.css'],
  providers: [MovieService]
})
export class ListmoviesComponent implements OnInit {

   movies: Movie[];
   s:string;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies);
  }
  deleteMovie(id){
    var movies = this.movies;
    this.movieService.deleteMovie(id)
    .subscribe(data =>{
      if(data.n == 1){
        for(var i = 0; i <movies.length; i++){
          if(movies[i]._id == id){
            movies.splice(i,1);
          }
        }
      }
    })
  }

}
