import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { OmdbMovieService } from 'src/app/services/omdb-movie/omdb-movie.service';
import { ToastrService } from 'ngx-toastr';
import { MovieTypes } from 'src/app/model/movie-type.model';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public searchValue: string = '';
  public movies: Movie[] = [];
  public movieTypes = MovieTypes;
  public genericMovieImage = "assets/images/generic-movie-image.png";
  public searchState = {
    search: 'empty',
    type: '',
    page: 1,
    totalElements: null
  };
  public isLoading = false;

  constructor(
    private ombdMovieService: OmdbMovieService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  public fetchData(): void {
    this.isLoading = true;
    this.ombdMovieService.search(this.searchState).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        if(res?.Response === 'False') {
          this.toastr.error(res?.Error ? res?.Error : 'Something went wrong while fetching some movies!');
        } else {
          this.movies = res.Search;
          this.searchState.totalElements = res.totalResults;
        }
      }
    });
  }

  /**
   * Triggered every time we are changing a page. 
   * @param event the event emitted from mat paginator
   */
  public onPageChange(event: any): void {
    this.searchState.page = event.pageIndex + 1;
    this.fetchData();
  }

  /**
   * Used for setting the search input on the state object for searching
   * @param value the string value from the input
   */
  public onFilterChange(value: string): void {
    this.searchState.search = value;
    this.fetchData();
  }

  /**
   * Clears the search filter value
   */
  public clearFilter(): void {
    this.searchValue = '';
    this.searchState.search = 'empty';
    this.fetchData();
  }

  /**
   * Triggered every time the type selection is changing
   * @param event the event from the select control
   */
  public onTypeChange(event: MatSelectChange): void {
    if(event.value !== undefined) {
      this.searchState.type = event.value;
    } else {
      this.searchState.type = '';
    }
    this.fetchData();
  }

  public goToDetails(id: string): void {
    this.router.navigate([`/movie/${id}`]);
  }

  public getMovieImage(movie: Movie): string {
    return movie.Poster !== "N/A" ? movie.Poster : this.genericMovieImage;
  }
}
