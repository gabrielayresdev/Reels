import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import Login from "../screens/Login";
import { View } from "react-native";
import Routes from ".";
import RegisterContextProvider from "../contexts/RegisterContext";
import TabRoutes from "./tab.routes";
import { UserContextProvider } from "../contexts/UserContext";
import { Authenticated } from "../components/Authenticated";

const NativeStack = createNativeStackNavigator();

export default function NativeStackRoutes() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTransparent: true,
      }}
    >
      <NativeStack.Screen
        name="Auth"
        component={AuthenticatedWithContext}
        options={{ title: "", headerShown: false }}
      />
      <NativeStack.Screen
        name="Register"
        component={RegisterWithContext}
        options={{ title: "Cadastro" }}
      />
      <NativeStack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
    </NativeStack.Navigator>
  );
}

function AuthenticatedWithContext() {
  return (
    <Authenticated>
      <TabRoutes />
    </Authenticated>
  );
}

function RegisterWithContext() {
  return (
    <RegisterContextProvider>
      <Register />
    </RegisterContextProvider>
  );
}
