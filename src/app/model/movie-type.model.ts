export enum MovieType {
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

export const getMovieType = (movieType: MovieType): string => {
  switch (movieType) {
    case MovieType.movie:
      return 'Movie';
    case MovieType.series:
      return 'Series';
    case MovieType.episode:
      return 'Episode';
    default:
      return '';
  }
};

export const MovieTypes: any[] = [
  {
    name: getMovieType(MovieType.movie),
    value: MovieType.movie
  },
  {
    name: getMovieType(MovieType.series),
    value: MovieType.series
  },
  {
    name: getMovieType(MovieType.episode),
    value: MovieType.episode
  }
];
