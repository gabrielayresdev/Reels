import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Container, LoadingBar } from "./styles";
import { ResizeMode, Video } from "expo-av";

const VideoPlayer = ({
  url,
  isPlaying,
}: {
  url: string;
  isPlaying: boolean;
}) => {
  const { width, height } = Dimensions.get("window");

  const getRandomColor = () => {
    return (
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0")
    );
  };

  return (
    <Video
      key={1}
      rate={1.0}
      volume={1.0}
      isMuted={true}
      shouldPlay={isPlaying}
      isLooping={true}
      useNativeControls={false}
      source={{
        uri: url,
      }}
      resizeMode={ResizeMode.CONTAIN}
      style={{
        width,
        height,
        backgroundColor: "black",
      }}
    />
  );

  return (
    <Container width={width} height={height}>
      <Video
        key={0}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        shouldPlay
        useNativeControls={false}
        isLooping={true}
        source={{
          uri: url,
        }}
        resizeMode={ResizeMode.CONTAIN}
        style={{ backgroundColor: getRandomColor() }}
      />
      <LoadingBar visible={true} />
    </Container>
  );
};
{
  /* <Video source={{ uri: url }} style={[StyleSheet.absoluteFillObject]} /> */
}
export default VideoPlayer;
