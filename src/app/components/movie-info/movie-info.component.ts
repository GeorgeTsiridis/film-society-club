import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from 'src/app/model/movie-details.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  public isLoading = false;
  public movie: MovieDetails | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  /**
   * Getting the movie through the router resolver and catching
   * the error here since the api is not working in the optimal way
   * with httpresponse on error states
   */
  ngOnInit(): void {
    this.isLoading = true;
    this.activatedRoute.data.subscribe(({ movie: movie }) => {
      this.isLoading = false;
      if(movie.Response === 'False') {
        this.toastr.error(movie?.Error ? movie?.Error : 'Something went wrong while fetching some movies!');
        this.router.navigate(['error']);
      } else {
        this.movie = movie;
      }
    });
  }

}
