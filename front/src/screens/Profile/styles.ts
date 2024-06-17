import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.G1};
  padding: 32px 16px 16px;
  gap: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 32px;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.BOLD};
  color: ${({ theme }) => theme.COLORS.G3};
`;

export const Exit = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.LIGHT};
  color: ${({ theme }) => theme.COLORS.G2};
`;

export const Paragraph = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.REGULAR};
  color: ${({ theme }) => theme.COLORS.G4};
`;
