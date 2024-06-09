import React from "react";
import { Container } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { MY_IP } from "@env";

const Login = () => {
  const [email, setEmail] = React.useState("tapafurq12@gmail.com");
  const [password, setPassword] = React.useState("teste123");
  const navigation = useNavigation();
  const onSubmit = async () => {
    try {
      const response = await fetch(`http://${MY_IP}:3333/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response?.status === 200) {
        console.log("Logado");
        navigation.navigate("Auth");
      }

      const token = await response.json();

      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Input
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
        placeholder="Email"
      />
      <Input
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
        placeholder="Senha"
      />
      <Button text="Entrar" onClick={onSubmit} />
      <Button
        text="Criar conta"
        onClick={() => {
          navigation.navigate("Register");
        }}
        type="SECONDARY"
      />
    </Container>
  );
};

export default Login;
