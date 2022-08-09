import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { movieApi } from '../interfaces/movieApi';
import { Movie } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // 50f69479
  private API_URL: string = 'http://www.omdbapi.com/?apikey=50f69479';

  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string): Observable<Movie[]> {
    return this.http.get<movieApi>(this.API_URL + '&s=' + searchTerm).pipe(
      map(response => {
        return response.Search;
      })
    )
  }
}
