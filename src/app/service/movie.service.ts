import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { API_CONFIG } from '../config/api-config';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private httpClient : HttpClient,
  ) { }

  findAllMovies(){
    return this.httpClient.get<Movie[]>(`${API_CONFIG.baseUrl}/movie`);
  }
}
