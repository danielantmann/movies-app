import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { Cast } from '@/infrastructure/interfaces/moviedb-cast.response';
import { ActorCard } from './ActorCard';

interface Props {
  cast: Cast[];
}
const MovieCast = ({ cast }: Props) => {
  return (
    <View className=" mb-20 mt-5 ">
      <Text className="mb-2 px-5 text-2xl font-bold">Actores</Text>
      <FlatList
        horizontal
        data={cast}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => <ActorCard actor={item} />}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MovieCast;
