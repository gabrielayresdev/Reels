import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.G1};
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const Form = styled.View`
  margin-bottom: 42px;
  width: 100%;
`;
