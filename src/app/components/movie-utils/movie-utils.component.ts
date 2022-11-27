import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Movie } from 'src/app/model/movie.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-movie-utils',
  templateUrl: './movie-utils.component.html',
  styleUrls: ['./movie-utils.component.scss']
})
export class MovieUtilsComponent implements OnInit {

  @Input()
  public movie: any | undefined;

  @Output() 
  public updateFavoritesEvent = new EventEmitter<boolean>();

  @Output() 
  public updateWatchedEvent = new EventEmitter<boolean>();

  constructor(
    private localStorageService: LocalStorageService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { }

  public toggleFavorites(movie: Movie | undefined): void {
    if (movie !== undefined) {
      let favorites = this.localStorageService.get('favorites') as any[];
      if (favorites === undefined) {
        favorites = [];
      }
      if (this.existsInFavorites(movie)) {
        favorites.splice(favorites.findIndex(f => f.imdbID === movie.imdbID), 1);
        this.toastr.info(movie.Title + ' removed from Favorites!');
      } else {
        favorites.push(movie);
        this.toastr.success(movie.Title + ' added to Favorites!');
      }
      this.localStorageService.set('favorites', favorites);
      this.updateFavoritesEvent.emit(true);
    }
  }

  public existsInFavorites(movie: Movie | undefined): boolean {
    const favorites = this.localStorageService.get('favorites') as any[];
    if (favorites !== undefined && movie !== undefined) {
      return favorites.findIndex(f => f.imdbID === movie.imdbID) !== -1;
    } else {
      return false;
    }
  }

  public toggleWatched(movie: Movie | undefined): void {
    if (movie !== undefined) {
      let watched = this.localStorageService.get('watched') as any[];
      if (watched === undefined) {
        watched = [];
      }
      if (this.existsInWatched(movie)) {
        watched.splice(watched.findIndex(w => w.imdbID === movie.imdbID), 1);
        this.toastr.info(movie.Title + ' removed from WatchedList!');
      } else {
        watched.push(movie);
        this.toastr.success(movie.Title + ' added to Favorites!');
      }
      this.localStorageService.set('watched', watched);
      this.updateWatchedEvent.emit(true);
    }
  }

  public existsInWatched(movie: Movie | undefined): boolean {
    const watched = this.localStorageService.get('watched') as any[];
    if (watched !== undefined && movie !== undefined) {
      return watched.findIndex(w => w.imdbID === movie.imdbID) !== -1;
    } else {
      return false;
    }
  }
}
