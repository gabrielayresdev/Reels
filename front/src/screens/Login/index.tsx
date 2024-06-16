import React from "react";
import { Container, Form } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import AuthService from "../../services/AuthService";
import { useAuth } from "../../contexts/AuthContext";
const Login = () => {
  const [email, setEmail] = React.useState("tapafurq12@gmail.com");
  const [password, setPassword] = React.useState("teste123");
  const navigation = useNavigation();
  const auth = useAuth();
  const onSubmit = async () => auth.loginAction({ email, password });

  return (
    <Container>
      <Form>
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
      </Form>
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
