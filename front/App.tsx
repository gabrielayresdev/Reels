import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feed from "./src/screens/Feed";
import LottieView from "lottie-react-native";
import React from "react";

export default function App() {
  const likeRef = React.useRef<LottieView | null>(null);
  const [liked, setLiked] = React.useState(false);

  React.useEffect(() => {
    likeRef?.current?.play(0, 1);
  }, []);

  const handleLike = () => {
    if (liked) {
      likeRef?.current?.reset();
    } else {
      likeRef?.current?.play(30, 144);
    }

    setLiked(!liked);
  };

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
