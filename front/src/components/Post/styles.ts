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
  padding: 32px 16px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  z-index: 2;
  background-color: purple;
`;

export const LeftSideContainer = styled.View`
  flex: 1;
  background-color: green;
  gap: 12px;
`;

export const RightSideContainer = styled.View`
  background-color: pink;
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
  background-color: blue;
`;

export const Icon = styled.View`
  width: 24px;
  height: 30px;
  background-color: gray;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: white;
  background-color: red;
`;

export const SpotifySoundTrack = styled.Text`
  background-color: gray;
  border-radius: 20px;
  align-self: flex-start;
  padding: 4px 8px;
  font-size: 14px;
`;
