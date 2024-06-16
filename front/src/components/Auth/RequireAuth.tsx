import React from "react";

import { useAuth } from "../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";

const RequireAuth = ({ children }: React.PropsWithChildren) => {
  const auth = useAuth();
  const navigation = useNavigation();

  React.useEffect(() => {
    if (!auth.user) navigation.navigate("Login");
  }, [auth.user, navigation]);

  // Can also use children instead of Outlet
  return <>{children}</>;
};

export default RequireAuth;
