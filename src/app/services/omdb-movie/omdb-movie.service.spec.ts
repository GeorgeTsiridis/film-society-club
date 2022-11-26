import { TestBed } from '@angular/core/testing';

import { OmdbMovieService } from './omdb-movie.service';

describe('OmdbMovieService', () => {
  let service: OmdbMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmdbMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
