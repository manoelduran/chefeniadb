import React from 'react';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import Loading from './src/components/Loading';
import { Provider } from "react-redux";
import { store } from "./src/store";
import Routes from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold
  })
  if (!fontsLoaded) {
    return <Loading />
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar style='light'
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}