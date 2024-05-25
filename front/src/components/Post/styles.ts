import LottieView from "lottie-react-native";
import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

type PostStyleProps = {
  width: number;
  height: number;
};

export const Container = styled.View<PostStyleProps>`
  position: relative;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  max-width: 100%;
  max-height: 100%;
  justify-content: flex-end;
`;

export const DataContainer = styled.View`
  position: absolute;
  padding: 32px 16px 16px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  z-index: 10;
`;

export const Gradient = styled(LinearGradient)`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
`;

export const LeftSideContainer = styled.View`
  flex: 1;
  gap: 12px;
`;

export const RightSideContainer = styled.View`
  height: 100%;
`;

export const UserData = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Avatar = styled.View`
  width: 60px;
  height: 60px;
  background-color: gray;
  border-radius: 30px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.POPPINS.SEMIBOLD};
    font-size: 20px;
    color: white;
  `}
`;

export const FollowButton = styled.TouchableHighlight`
  padding: 4px 8px;
  border: 1px solid #fff;
  border-radius: 4px;
  align-self: flex-start;
`;
export const FollowButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
    font-size: 14px;
    color: white;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
    font-size: 14px;
    color: white;
  `}
`;

export const HeartContainer = styled.View`
  position: relative;
  width: 37px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeartIcon = styled(LottieView)`
  width: 70px;
  height: 70px;

  position: absolute;
  z-index: 10;
`;
