import React from "react";
import { Container } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onSubmit = async () => {
    try {
      const response = await fetch("http://192.168.15.39:3333/login", {
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
    </Container>
  );
};

export default Login;
