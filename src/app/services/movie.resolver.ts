import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { OmdbMovieService } from './omdb-movie/omdb-movie.service';
import { MovieDetails } from '../model/movie-details.model';

@Injectable({ providedIn: 'root' })
export class MovieResolver implements Resolve<MovieDetails> {
  constructor(private movieService: OmdbMovieService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): any {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.movieService.findById(id).pipe(
        catchError(() => {
            this.router.navigate(['error']);
          return of();
        }),
        map((movie: HttpResponse<MovieDetails>) => movie)
      );
    }
    return of();
  }
}
