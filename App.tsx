import { NativeBaseProvider, StatusBar } from "native-base";
import React from 'react';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { THEME } from './src/styles/theme';
import Loading from './src/components/Loading';
import { Provider } from "react-redux";
import { store } from "./src/store";
import Routes from "./src/routes";
import Room from "./src/screens/Room";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold
  })
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={THEME}>
        <StatusBar barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ?
          <Routes/>
          : <Loading />
        }
      </NativeBaseProvider>
    </Provider>
  );
}