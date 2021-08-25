import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie.module';

@Component({
  selector: 'app-movie-tab',
  templateUrl: './movie-tab.component.html',
  styleUrls: ['./movie-tab.component.css']
})
export class MovieTabComponent implements OnInit {

  @Input()
  movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
