import { MovieDBMovieResultResponse } from '../interfaces/movidedb-movie.response';
import { CompleteMovie, Movie } from '../interfaces/movie.interface';
import { Result } from '../interfaces/moviedb-response';

export class MovieMapper {
  static fromMovieDBToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      rating: movie.vote_average,
    };
  };

  static fromMovieDBToCompleteMovie = (movie: MovieDBMovieResultResponse): CompleteMovie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      rating: movie.vote_average,
      budget: movie.budget,
      duration: movie.runtime,
      genres: movie.genres.map((g) => g.name),
      originalTitle: movie.original_title,
      productionCompany: movie.production_companies.map((p) => p.name),
    };
  };
}
