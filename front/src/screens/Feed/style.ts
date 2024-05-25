import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: black;
`;

export const List = styled.FlatList`
  flex: 1;
`;
