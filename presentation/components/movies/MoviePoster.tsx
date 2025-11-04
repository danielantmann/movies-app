import { Pressable, Image } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
}
const MoviePoster = ({ id, poster, smallPoster = false }: Props) => {
  return (
    <Pressable className="px-2  active:opacity-90" onPress={() => router.push(`/movie/${id}`)}>
      <Image
        source={{ uri: poster }}
        className="h-full w-full rounded-2xl shadow-lg"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 150 : 250,
          borderRadius: 16,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default MoviePoster;
