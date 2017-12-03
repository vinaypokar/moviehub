import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from './movie';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  
  transform(movies: any, args?: any): any {
    if(!args)
      return movies;
	  else{
		  return movies.filter(movies.name.toLowerCase().includes(args.toLowerCase())
		  );
	  }
  }

}
