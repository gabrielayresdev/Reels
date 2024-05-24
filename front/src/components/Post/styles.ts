import LottieView from "lottie-react-native";
import styled from "styled-components/native";

type PostStyleProps = {
  width: number;
  height: number;
};

export const Container = styled.View<PostStyleProps>`
  position: relative;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  justify-content: flex-end;
`;

export const DataContainer = styled.View`
  position: absolute;
  padding: 32px 16px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  z-index: 10;
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
  width: 40px;
  height: 40px;
  background-color: gray;
  border-radius: 20px;
`;

export const UserDataTextContainer = styled.View``;

export const Name = styled.Text`
  font-size: 14px;
  color: white;
`;

export const Icon = styled.View`
  width: 24px;
  height: 30px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: white;
`;

export const SpotifySoundTrack = styled.Text`
  border-radius: 20px;
  align-self: flex-start;
  padding: 4px 8px;
  font-size: 14px;
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
