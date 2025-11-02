import { View, Text, ActivityIndicator } from 'react-native';

import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '@/presentation/hooks/useMovies';

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();
  const safeArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="mb-2 px-4 text-3xl font-bold">HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
