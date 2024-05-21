import styled from "styled-components/native";

type PostStyleProps = {
  width: number;
  height: number;
};

export const Container = styled.View<PostStyleProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  background-color: rgba(0, 0, 0, 0.75);
`;

type LoadingBarVisibility = {
  visible: boolean;
};

export const LoadingBar = styled.View<LoadingBarVisibility>`
  width: 100%;
  height: 2px;
  background: ${({ visible }) => (visible ? "white" : "#ffffff00")};
  position: absolute;
  bottom: 0;
  left: 0;
`;
