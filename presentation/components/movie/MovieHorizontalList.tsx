import { View, Text, FlatList } from 'react-native';
import React from 'react';

import { Movie } from '@/infrastructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

const MovieHorizontalList = ({ title, movies }: Props) => {
  return (
    <View className="mb-2">
      {title && <Text className="mb-2 px-4 text-3xl font-bold">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MovieHorizontalList;
