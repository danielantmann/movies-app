import { movieApi } from '@/core/api/movie-api';
import { MovieDBMovieResponse } from '@/infrastructure/interfaces/moviedb-response';

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>('/now_playing');
    console.log(JSON.stringify(data, null, 2));
    return [];
  } catch (error) {
    console.log(error);
    throw 'CAnnot load now playing movies';
  }
};
