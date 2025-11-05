import { movieApi } from '@/core/api/movie-api';
import { Cast } from '@/infrastructure/interfaces/moviedb-cast.response';
import { MovieDBCastResponse } from '@/infrastructure/interfaces/moviedb-credits.response';
import { CastMapper } from '@/infrastructure/mappers/cast.mapper';

export const getMovieCastAction = async (id: number | string) => {
  try {
    const { data } = await movieApi.get<MovieDBCastResponse>(`/${id}/credits`);

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    throw 'Cannot load  casts ';
  }
};
