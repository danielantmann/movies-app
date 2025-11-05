import React from 'react';
import '../global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-native-url-polyfill/auto';
import 'cross-fetch/polyfill';
import { Stack } from 'expo-router';

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </QueryClientProvider>
  );
};

export default RootLayout;
