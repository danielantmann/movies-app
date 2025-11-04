import { bestMoviesAction } from '@/core/actions/movies/top-rated-movies.action';
import { nowPlayingAction } from '@/core/actions/movies/now-playing.actions';
import { popularMoviesActions } from '@/core/actions/movies/popular.actions';
import { useQuery } from '@tanstack/react-query';
import { upcomingAction } from '@/core/actions/movies/upcoming.action';

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const popularQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: popularMoviesActions,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const topRatedQuery = useQuery({
    queryKey: ['movies', 'top-rated'],
    queryFn: bestMoviesAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const upcomingQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcomingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
