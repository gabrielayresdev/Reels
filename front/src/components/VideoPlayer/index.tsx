import React from "react";
import { Dimensions } from "react-native";
import { ResizeMode, Video } from "expo-av";

const VideoPlayer = ({
  url,
  isPlaying,
}: {
  url: string;
  isPlaying: boolean;
}) => {
  const { width, height } = Dimensions.get("window");

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
};

export default VideoPlayer;
