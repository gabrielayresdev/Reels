import { StatusBar, StyleSheet } from "react-native";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts as usePoppinsFonts,
} from "@expo-google-fonts/poppins";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts as useRobotoFonts,
} from "@expo-google-fonts/roboto";
import Routes from "./src/routes";
import { MY_IP } from "@env";
import AuthProvider from "./src/contexts/AuthContext";

export default function App() {
  const [robotoLoaded] = useRobotoFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
  });
  const [poppinsLoaded] = usePoppinsFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  console.log(MY_IP);
  return (
    <ThemeProvider theme={theme}>
      {robotoLoaded && poppinsLoaded ? <Routes /> : <></>}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  );
}
