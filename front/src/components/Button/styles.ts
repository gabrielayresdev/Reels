import styled, { css } from "styled-components/native";

export type BtnStyleProps = {
  disabled: boolean;
  type?: "PRIMARY" | "SECONDARY";
};

export const Btn = styled.TouchableOpacity<BtnStyleProps>`
  ${({ theme, type, disabled }) =>
    type === "PRIMARY"
      ? css`
          background: ${disabled ? "#363E4A" : theme.COLORS.B1};
        `
      : css`
          background: transparent;
        `}
  padding: 8px 16px;

  width: 100%;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled.Text<BtnStyleProps>`
  ${({ theme, type, disabled }) =>
    type === "PRIMARY"
      ? css`
          color: ${disabled ? theme.COLORS.G0 : theme.COLORS.G4};
        `
      : css`
          color: ${theme.COLORS.G3};
        `}

  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS.SEMIBOLD};
`;
