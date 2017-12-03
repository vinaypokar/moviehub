import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Director} from '../director';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-adddirector',
  templateUrl: './adddirector.component.html',
  styleUrls: ['./adddirector.component.css'],
  providers: [MovieService]
})
export class AdddirectorComponent implements OnInit {

  directors: Director[]=[];
  name: String;
  age:Number;
  gender:String;
  directed:String;
  movies_directed:[String];
  constructor(private movieService: MovieService, private router: Router) { }

  addDirector(){
    const newDirector = {
      name : this.name,
      age: this.age,
      gender: this.gender,
      movies_directed: this.directed.split(","),
    }
    this.movieService.addDirector(newDirector)
    .subscribe(director => {
      this.directors.push(director);
      this.movieService.getMovies()
      .subscribe(directors => this.directors = directors);
    });
    //this.router.navigate(['/listmovies']);
  }

  ngOnInit() {
  }

}
