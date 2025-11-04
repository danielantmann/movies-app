import { movieApi } from '@/core/api/movie-api';
import { MovieDBMovieResponse } from '@/infrastructure/interfaces/moviedb-response';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const popularMoviesActions = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>('/popular');
    const movies = data.results.map(MovieMapper.fromMovieDBToMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
};
