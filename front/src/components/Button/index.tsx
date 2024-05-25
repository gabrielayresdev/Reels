import React from "react";
import { Btn, BtnText } from "./styles";
import { Text } from "react-native";

type Props = {
  text: string;
  onClick: VoidFunction;
  disabled?: boolean;
  type?: "PRIMARY" | "SECONDARY";
};

const Button = ({
  text,
  onClick,
  disabled = false,
  type = "PRIMARY",
}: Props) => {
  return (
    <Btn onPress={onClick} disabled={disabled} type={type}>
      <BtnText disabled={disabled} type={type}>
        {text}
      </BtnText>
    </Btn>
  );
};

export default Button;
