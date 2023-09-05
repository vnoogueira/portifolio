import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{

  movies$ = new Observable<Movie[]>();

  constructor(
    private movieService : MovieService,
  ){}


  ngOnInit(): void {
    this.findAllMovies();
    console.log(this.movies$);
  }

  findAllMovies(){
    this.movies$ = this.movieService.findAllMovies();
    }
  }
