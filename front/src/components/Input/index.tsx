import React from "react";

import {
  InputContainer,
  FlexBox,
  Label,
  Error,
  InputField,
  InputFieldMasked,
} from "./styles";
import { FieldError } from "react-hook-form";
import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from "react-native-masked-text";

type Mask = {
  type: TextInputMaskTypeProp;
  options: TextInputMaskOptionProp | undefined;
};

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: VoidFunction;
  label?: string;
  placeholder?: string;
  error?: FieldError | undefined;
  secureTextEntry?: boolean;
  mask?: Mask;
};

const Input = ({
  value,
  onChangeText,
  onBlur,
  label,
  placeholder,
  error,
  mask,
  ...rest
}: Props) => {
  return (
    <InputContainer>
      {/* <FlexBox>
      </FlexBox> */}
      {mask ? (
        <InputFieldMasked
          placeholder={placeholder}
          style={{ borderBottomWidth: 1 }}
          value={value}
          type={mask.type}
          options={mask.options}
          onChangeText={(value) => onChangeText(value)}
          onBlur={onBlur}
          {...rest}
        />
      ) : (
        <InputField
          placeholder={placeholder}
          style={{ borderBottomWidth: 1 }}
          value={value}
          onChangeText={(value) => onChangeText(value)}
          onBlur={onBlur}
          {...rest}
        />
      )}
      <Error>{error ? error.message : null}</Error>
    </InputContainer>
  );
};

export default Input;
