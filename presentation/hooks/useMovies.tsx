import { bestMoviesAction } from '@/core/actions/movies/top-rated-movies.action';
import { nowPlayingAction } from '@/core/actions/movies/now-playing.actions';
import { popularMoviesActions } from '@/core/actions/movies/popular.actions';
import { useQuery } from '@tanstack/react-query';
import { upcomingAction } from '@/core/actions/movies/upcoming.action';
import { useInfiniteMovies } from './useInfinitMovies';

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const popularQuery = useInfiniteMovies('popular', (page) => popularMoviesActions({ page }));

  const topRatedQuery = useInfiniteMovies('top-rated', (page) => bestMoviesAction({ page }));

  const upcomingQuery = useInfiniteMovies('upcoming', (page) => upcomingAction({ page }));

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
