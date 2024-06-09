import React from "react";
import { useUserContext } from "../../contexts/UserContext";
import { useNavigation } from "@react-navigation/native";

export function Authenticated({ children }: React.PropsWithChildren) {
  const { user, token } = useUserContext();
  const navigation = useNavigation();

  if (user && token) return children;
  else navigation.navigate("Login");
}
