import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Movie} from './movie';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  // retriving movies
  getMovies(){
    return this.http.get('http://localhost:3000/api/movies')
    .map(res => res.json());
  }

  // getting specified movie
  getSelectedMovie(id){
    return this.http.get('http://localhost:3000/api/movies/'+id)
    .map(res => res.json());
  }

  // adding movies
  addMovie(newMovie){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/movie', newMovie, {headers: headers})
    .map(res => res.json());
  }

  // deleting movie
  deleteMovie(id){
    return this.http.delete('http://localhost:3000/api/movie/'+id)
    .map(res => res.json());
  }

  // updating movie
  updateMovie(newMovie){
    console.log(newMovie._id);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/api/updatemovie/'+newMovie._id,newMovie, {headers: headers})
    .map(res => res.json());
  }

  //adding actor
  addActor(newActor){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/actor', newActor, {headers: headers})
    .map(res => res.json());
  }

  //geting actor by name
  getActorInfo(name){
    return this.http.get('http://localhost:3000/api/actor/'+name)
    .map(res => res.json());
  }

  //adding director
  addDirector(newDirector){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/director', newDirector, {headers: headers})
    .map(res => res.json());
  }
}
