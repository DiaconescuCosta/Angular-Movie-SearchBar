import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from './movie.interface';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly urlShort = `https://omdbapi.com/?apikey=`;
  private readonly APIKEY = `58a7c679`;



  constructor(
    private http: HttpClient
  ) { }

  searchMovie(searchQuery: string): Observable<Array<Movie>> {
    return this.http.get(`${this.urlShort + this.APIKEY}&s=${searchQuery}`)
      .pipe(
        map((response: any) => response.Search)
      );
  }
  
  getDetails(imdbId: string | null): Observable<any> {
    return this.http.get(`${this.urlShort + this.APIKEY}&i=${imdbId}&plot=short`);
    
  }
}
