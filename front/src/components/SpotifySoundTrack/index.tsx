import React from "react";
import { Container, MusicTitle } from "./styles";
import Feather from "@expo/vector-icons/Feather";

type Props = {
  title: string | null;
};

const SpotifySoundTrack = ({ title }: Props) => {
  return (
    <Container>
      <Feather size={14} name="music" color="white" />
      <MusicTitle>{title ? title : "Som original"}</MusicTitle>
    </Container>
  );
};

export default SpotifySoundTrack;
