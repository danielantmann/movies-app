import { movieApi } from '@/core/api/movie-api';
import { MovieDBMovieResultResponse } from '@/infrastructure/interfaces/movidedb-movie.response';
import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const getMovieByIdAction = async (id: number | string): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResultResponse>(`/${id}`);

    return MovieMapper.fromMovieDBToCompleteMovie(data);
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
};
