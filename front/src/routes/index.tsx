import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tab.routes";
import NativeStackRoutes from "./stack.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <NativeStackRoutes />
    </NavigationContainer>
  );
}
