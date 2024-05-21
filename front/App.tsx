import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Feed from "./src/screens/Feed";

export default function App() {
  return <Feed />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
