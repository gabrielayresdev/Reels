import { StyleSheet, StatusBar } from "react-native";
import Feed from "./src/screens/Feed";
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

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {robotoLoaded && poppinsLoaded ? <Routes /> : <></>}
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
