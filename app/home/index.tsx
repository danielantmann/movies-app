import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '@/presentation/hooks/useMovies';
import MainSlideShow from '@/presentation/components/movie/MainSlideShow';
import MovieHorizontalList from '@/presentation/components/movie/MovieHorizontalList';

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();
  const safeArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="mb-2 px-4 text-3xl font-bold">Movies APP</Text>

        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        <MovieHorizontalList
          title="Popular Movies"
          movies={popularQuery.data?.pages.flat() ?? []}
          loadNextPage={() => popularQuery.fetchNextPage()}
        />

        <MovieHorizontalList
          title="Top Rated"
          movies={topRatedQuery.data?.pages.flat() ?? []}
          loadNextPage={() => topRatedQuery.fetchNextPage()}
        />

        <MovieHorizontalList
          title="Upcoming"
          movies={upcomingQuery.data?.pages.flat() ?? []}
          loadNextPage={() => upcomingQuery.fetchNextPage()}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
