import { useInfiniteQuery } from '@tanstack/react-query';

export const useInfiniteMovies = (key: string, actionFn: (page: number) => Promise<any>) => {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', key],
    queryFn: ({ pageParam }) => actionFn(pageParam),
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    staleTime: 1000 * 60 * 60 * 24,
  });
};
