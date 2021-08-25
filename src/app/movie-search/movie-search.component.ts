import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movie.module';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent  {

  isSearching: boolean;
  query!: string;
  movies!: Observable<Array<Movie>>;

  constructor(
    private movieService: MovieService
  ) {
    this.isSearching = false;
  }



  getMovieSearchResult() {
    this.movies = this.movieService.searchMovie(this.query)
  }



}
