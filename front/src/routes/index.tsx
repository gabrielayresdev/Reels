import { NavigationContainer } from "@react-navigation/native";
import NativeStackRoutes from "./stack.routes";
import AuthProvider from "../contexts/AuthContext";

export default function Routes() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NativeStackRoutes />
      </AuthProvider>
      {/* <TabRoutes /> */}
    </NavigationContainer>
  );
}
