import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { MovieDetails } from '../movie.interface';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails!: Observable<MovieDetails>;
  imdbId!: string | null;

  constructor(
    private route: ActivatedRoute,
    private service: MovieService,
    
  ) {}
  

  ngOnInit(): void {
    // Old Method left for reference, getting id through query params

    // this.movieDetails = this.route.queryParams.pipe(
    //   map(queryParams => queryParams['movieId']),
    //   switchMap(imdbId => this.service.getDetails(imdbId)),
    // );
    
    
    this.imdbId = this.route.snapshot.paramMap.get('imdbId');
    console.log(this.imdbId);
    this.movieDetails = this.service.getDetails(this.imdbId);
    
  }

}
