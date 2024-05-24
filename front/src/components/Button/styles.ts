import styled from "styled-components/native";

type BtnStyleProps = {
  disabled: boolean;
};

export const Btn = styled.TouchableOpacity<BtnStyleProps>`
  background: ${({ disabled }) => (disabled ? "#ddd" : "#FE2B53")};
  padding: 8px 16px;

  width: 100%;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled.Text`
  color: #000;
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS.SEMIBOLD};
`;
