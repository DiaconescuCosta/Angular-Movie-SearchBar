import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from './movie.interface';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  searchMovie(searchQuery: string): Observable<Array<Movie>> {
    return this.http.get(`&s=${searchQuery}`)
      .pipe(
        map((response: any) => response.Search)
      );
  }
  
  getDetails(imdbId: string | null): Observable<any> {
    return this.http.get(`&i=${imdbId}&plot=short`);
    
  }
}
