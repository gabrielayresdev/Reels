import React from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const auth = useAuth();
  return (
    <Container>
      <Text style={{ color: "white" }}>Profile</Text>
    </Container>
  );
};

export default Profile;
