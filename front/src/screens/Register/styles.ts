import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: "fafafa";
  padding: 200px 16px;
`;

export const ListItem = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
    font-size: 18px;
    color: #000;
  `}
`;
