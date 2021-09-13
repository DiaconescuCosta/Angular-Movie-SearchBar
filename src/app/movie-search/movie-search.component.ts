import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Movie } from '../movie.interface';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {


  query!: string;
  movies!: Observable<Array<Movie>>;
  inputForm!: FormGroup;

  constructor(
    private movieService: MovieService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // Old method with FormGroup:
    // this.inputForm = new FormGroup({
    //   'input': new FormControl(null)
    // });

    // New method with FormBuilder:
    this.inputForm = this.fb.group({
      input: [''] 
    })
  }


// Old method, left for reference, getting query through NgModel

  getMovieSearchResult() {
    this.movies = this.movieService.searchMovie(this.query)
  }

  // New method, getting and submiting a Reactive Form

  onSubmit() {
    this.movies = this.movieService.searchMovie(this.inputForm.controls['input'].value);
  }



}
