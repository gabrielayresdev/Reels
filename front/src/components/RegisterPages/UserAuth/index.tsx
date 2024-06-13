import React from "react";
import {
  RegisterProps,
  useRegisterContext,
} from "../../../contexts/RegisterContext";
import { Container, Form } from "./styles";
import { Controller, SubmitHandler } from "react-hook-form";
import Input from "../../Input";
import Button from "../../Button";
import { useNavigation } from "@react-navigation/native";
import AuthService from "../../../services/AuthService";

const UserAuth = () => {
  const { control, handleSubmit, errors, watch, trigger, pagination } =
    useRegisterContext();
  const passwordRef = React.useRef<string>();
  passwordRef.current = watch("password", "");
  const [disabled, setDisabled] = React.useState(false);
  const navigation = useNavigation();
  const onSubmit: SubmitHandler<RegisterProps> = async (data) => {
    try {
      const response = await AuthService.register(data);

      if (response?.status === 201) {
        console.log("Cadastrado");
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Email"
              value={value}
              onChangeText={(text) => {
                onChange(text);
                if (errors.email) trigger("email");
              }}
              onBlur={onBlur}
              label="Email"
              error={errors.email}
            />
          )}
          rules={{
            required: "Preencha o campo",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              message: "Use um email válido",
            },
          }}
          name="email"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Senha"
              value={value}
              onChangeText={(text) => {
                onChange(text);
                if (errors.password) trigger("password");
              }}
              onBlur={onBlur}
              label="Senha"
              error={errors.password}
              secureTextEntry
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="password"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Confirmar senha"
              value={value}
              onChangeText={(text) => {
                onChange(text);
                if (errors.password2) trigger("password2");
              }}
              onBlur={onBlur}
              label="Confirmar senha"
              error={errors.password2}
              secureTextEntry
            />
          )}
          rules={{
            required: "Preencha o campo",
            validate: (value) =>
              value === passwordRef.current || "As senhas não coincidem",
          }}
          name="password2"
        />
      </Form>
      <Button
        text="Concluir cadastro"
        disabled={disabled}
        onClick={handleSubmit(onSubmit)}
      />
      <Button
        text="Voltar"
        onClick={() => {
          pagination.goBack();
        }}
        type="SECONDARY"
      />
    </Container>
  );
};

export default UserAuth;
