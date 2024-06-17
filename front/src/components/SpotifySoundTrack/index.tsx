import React from "react";
import { Container, MusicTitle } from "./styles";
import Feather from "@expo/vector-icons/Feather";
import { Linking } from "react-native";

type Props = {
  title: string;
  url: string | null;
};

const SpotifySoundTrack = ({ title, url }: Props) => {
  return (
    <Container
      onPress={() => {
        if (url) {
          console.log(url);
          Linking.openURL(url);
        }
      }}
    >
      <Feather size={14} name="music" color="white" />
      <MusicTitle>{title ? title : "Som original"}</MusicTitle>
    </Container>
  );
};

export default SpotifySoundTrack;
