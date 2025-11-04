import { View, Text, FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import React, { useEffect, useRef } from 'react';

import { Movie } from '@/infrastructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];

  loadNextPage?: () => void;
}

const MovieHorizontalList = ({ title, movies, loadNextPage }: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    loadNextPage && loadNextPage();
  };
  return (
    <View className="mb-2">
      {title && <Text className="mb-2 px-4 text-3xl font-bold">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
