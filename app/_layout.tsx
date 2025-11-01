import { Text, View } from 'react-native';
import React, { Component } from 'react';
import '../global.css';
import { nowPlayingAction } from '@/core/actions/movies/now-playing.actions';

const RootLayout = () => {
  nowPlayingAction();
  return (
    <View>
      <Text>RootLayout</Text>
    </View>
  );
};

export default RootLayout;
