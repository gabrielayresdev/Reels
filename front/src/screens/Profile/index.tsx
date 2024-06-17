import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Container, Exit, Paragraph, Row, Title } from "./styles";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../../components/Button";

const Profile = () => {
  const auth = useAuth();
  const { user } = auth;
  return (
    <Container>
      <Row>
        <Title>{user?.name}</Title>
        <TouchableOpacity onPress={() => auth.logOut()}>
          <Exit>Sair</Exit>
        </TouchableOpacity>
      </Row>
      <Paragraph>{`email: ${user?.email}`}</Paragraph>
      <Paragraph>{`telefone: ${user?.phone}`}</Paragraph>
    </Container>
  );
};

export default Profile;
