import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import Login from "../screens/Login";
import { View } from "react-native";
import Routes from ".";
import RegisterContextProvider from "../contexts/RegisterContext";
import TabRoutes from "./tab.routes";

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
        name="Register"
        component={RegisterWithContext}
        options={{ title: "Cadastro" }}
      />
      <NativeStack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
      <NativeStack.Screen
        name="Auth"
        component={Authenticated}
        options={{ title: "", headerShown: false }}
      />
    </NativeStack.Navigator>
  );
}

function Authenticated() {
  return <TabRoutes />;
}

function RegisterWithContext() {
  return (
    <RegisterContextProvider>
      <Register />
    </RegisterContextProvider>
  );
}
