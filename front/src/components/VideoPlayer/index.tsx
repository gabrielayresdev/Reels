import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Video from "react-native-video";
import { Container, LoadingBar } from "./styles";

const VideoPlayer = ({ url }: { url: string }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <Container width={width} height={height}>
      <LoadingBar visible={true} />
    </Container>
  );
};
{
  /* <Video source={{ uri: url }} style={[StyleSheet.absoluteFillObject]} /> */
}
export default VideoPlayer;
