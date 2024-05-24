import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  border-radius: 20px;
  padding: 4px 8px;
  gap: 4px;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const MusicTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
    font-size: 14px;
    color: #fff;
  `}
`;
