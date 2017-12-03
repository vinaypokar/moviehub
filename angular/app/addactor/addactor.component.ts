import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Actor} from '../actor';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-addactor',
  templateUrl: './addactor.component.html',
  styleUrls: ['./addactor.component.css'],
  providers: [MovieService]
})
export class AddactorComponent implements OnInit {

  actors: Actor[]=[];
  name: String;
  age:Number;
  gender:String;
  acted:String;
  acted_in:[String];
  constructor(private movieService: MovieService, private router: Router) { }

  addActor(){
    const newActor = {
      name : this.name,
      age: this.age,
      gender: this.gender,
      acted_in: this.acted.split(","),
    }
    this.movieService.addActor(newActor)
    .subscribe(actor => {
      this.actors.push(actor);
      this.movieService.getMovies()
      .subscribe(actors => this.actors = actors);
    });
    //this.router.navigate(['/listmovies']);
  }

  ngOnInit() {
  }

}
