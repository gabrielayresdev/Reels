import React from "react";
import { Container, Img, Subtitle, Title } from "./styles";
import { View } from "react-native";

const EmptyPage = () => {
  return (
    <Container>
      <Img source={require("../../../assets/empty-box.png")} />
      <View>
        <Title>Nothing to see here</Title>
        <Subtitle>Try again later</Subtitle>
      </View>
    </Container>
  );
};

export default EmptyPage;
