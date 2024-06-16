import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import Login from "../screens/Login";
import RegisterContextProvider from "../contexts/RegisterContext";
import TabRoutes from "./tab.routes";
import { useTheme } from "styled-components/native";
import RequireAuth from "../components/Auth/RequireAuth";

const NativeStack = createNativeStackNavigator();

export default function NativeStackRoutes() {
  const theme = useTheme();
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTransparent: true,
        headerTintColor: theme.COLORS.G3,
      }}
    >
      <NativeStack.Screen name="Register" options={{ title: "Cadastro" }}>
        {() => (
          <RegisterContextProvider>
            <Register />
          </RegisterContextProvider>
        )}
      </NativeStack.Screen>
      <NativeStack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
      <NativeStack.Screen
        name="Auth"
        options={{ title: "", headerShown: false }}
      >
        {() => (
          <RequireAuth>
            <TabRoutes />
          </RequireAuth>
        )}
      </NativeStack.Screen>
    </NativeStack.Navigator>
  );
}
