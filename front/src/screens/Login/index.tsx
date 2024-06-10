import React from "react";
import { Container } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import AuthService from "../../services/AuthService";
const Login = () => {
  const [email, setEmail] = React.useState("tapafurq12@gmail.com");
  const [password, setPassword] = React.useState("teste123");
  const navigation = useNavigation();
  const onSubmit = async () => {
    try {
      const response = await AuthService.login({ email, password });
      if (response?.status === 200) {
        const token = response.data;

        console.log("Logado: ");
        console.log(token);
        navigation.navigate("Auth");
      }
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
