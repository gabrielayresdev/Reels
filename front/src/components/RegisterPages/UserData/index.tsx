import React from "react";
import { useRegisterContext } from "../../../contexts/RegisterContext";
import { Container } from "./styles";
import { Controller } from "react-hook-form";
import Input from "../../Input";
import Button from "../../Button";

const UserData = () => {
  const [disabled, setDisabled] = React.useState(false);
  const { control, errors, trigger, pagination, handlePartialSubmit } =
    useRegisterContext();

  function handleClick() {
    handlePartialSubmit(["name", "phone"], () => {
      pagination.goNext();
    });
  }

  React.useEffect(() => {
    if (errors.name || errors.phone) setDisabled(true);
    else setDisabled(false);
  }, [errors.name, errors.phone]);

  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Nome"
            value={value}
            onChangeText={(text) => {
              onChange(text);
              if (errors.name) trigger("name");
            }}
            onBlur={onBlur}
            label="First name"
            error={errors.name}
          />
        )}
        rules={{
          required: "Preencha o campo",
        }}
        name="name"
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Telefone"
            value={value}
            onChangeText={(text) => {
              onChange(text);
              if (errors.phone) trigger("phone");
            }}
            onBlur={onBlur}
            label="Phone"
            error={errors.phone}
            mask={{
              type: "cel-phone",
              options: {
                maskType: "BRL",
                withDDD: true,
                dddMask: "(99) ",
              },
            }}
          />
        )}
        rules={{
          required: "Preencha o campo",
        }}
        name="phone"
      />
      <Button text="Avançar" disabled={disabled} onClick={handleClick} />
    </Container>
  );
};

export default UserData;
