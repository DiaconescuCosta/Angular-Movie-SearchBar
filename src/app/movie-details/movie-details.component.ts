import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { MovieDetails } from '../movie.module';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails!: Observable<MovieDetails>;

  constructor(
    private route: ActivatedRoute,
    private service: MovieService
  ) { }

  ngOnInit(): void {
    this.movieDetails = this.route.queryParams.pipe(
      map(queryParams => queryParams['movieId']),
      switchMap(imdbId => this.service.getDetails(imdbId)),
    );
  }

}
