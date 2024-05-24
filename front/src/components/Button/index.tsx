import React from "react";
import { Btn, BtnText } from "./styles";
import { Text } from "react-native";

type Props = {
  text: string;
  onClick: VoidFunction;
  disabled?: boolean;
};

const Button = ({ text, onClick, disabled = false }: Props) => {
  return (
    <Btn onPress={onClick} disabled={disabled}>
      <BtnText>{text}</BtnText>
    </Btn>
  );
};

export default Button;
