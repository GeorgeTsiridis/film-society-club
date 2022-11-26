import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-watched-list',
  templateUrl: './watched-list.component.html',
  styleUrls: ['./watched-list.component.scss']
})
export class WatchedListComponent implements OnInit {
  public movies: Movie[] = [];
  public genericMovieImage = "assets/images/generic-movie-image.png";

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies(): void {
    this.movies = this.localStorageService.get('watched') as Movie[];
  }

  public goToDetails(id: string): void {
    this.router.navigate([`/movie/${id}`]);
  }

  public getMovieImage(movie: Movie): string {
    return movie.Poster !== "N/A" ? movie.Poster : this.genericMovieImage;
  }
}
