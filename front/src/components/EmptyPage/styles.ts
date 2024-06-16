import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`;

export const Img = styled.Image.attrs(() => ({
  resizeMode: "contain",
}))`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.BOLD};
  color: ${({ theme }) => theme.COLORS.G3};
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.REGULAR};
  color: ${({ theme }) => theme.COLORS.G2};
  text-align: center;
  margin-top: 8px;
`;
