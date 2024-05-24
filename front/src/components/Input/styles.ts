import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

export const InputContainer = styled.View`
  width: 100%;
`;

export const FlexBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-size: 20px;
  color: #33415c;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.REGULAR};

  margin-bottom: 8px;
`;

export const Error = styled.Text`
  color: #dc3838;
  font-size: 14px;
  text-align: end;

  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.REGULAR};
`;

export const InputField = styled.TextInput.attrs({
  placeholderTextColor: "#979dac",
})`
  border-color: #ddd;
  padding: 8px 0;

  font-size: 20px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.REGULAR};
  color: #000;

  outline-style: none;
`;

export const InputFieldMasked = styled(TextInputMask).attrs({
  placeholderTextColor: "#979dac",
})`
  border-color: #ddd;
  padding: 8px 0;

  font-size: 20px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.REGULAR};
  color: #000;

  outline-style: none;
`;
