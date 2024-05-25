import styled, { css } from "styled-components/native";

export type BtnStyleProps = {
  disabled: boolean;
  type?: "PRIMARY" | "SECONDARY";
};

export const Btn = styled.TouchableOpacity<BtnStyleProps>`
  ${({ type, disabled }) =>
    type === "PRIMARY"
      ? css`
          background: ${disabled ? "#ddd" : "#FE2B53"};
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
  ${({ type, disabled }) =>
    type === "PRIMARY"
      ? css`
          color: ${disabled ? "#000" : "#fff"};
        `
      : css`
          color: "#000";
        `}

  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS.SEMIBOLD};
`;
