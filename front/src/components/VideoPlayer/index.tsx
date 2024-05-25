import React from "react";
import { Dimensions } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const VideoPlayer = ({
  url,
  isPlaying,
}: {
  url: string;
  isPlaying: boolean;
}) => {
  const dimensions = Dimensions.get("window");
  const insets = useSafeAreaInsets();
  const width = dimensions.width;
  const height = dimensions.height - insets.top - 50;

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
