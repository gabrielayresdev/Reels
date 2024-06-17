import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Liked from "../screens/Liked";
import AppConfig from "../screens/AppConfig";
import Profile from "../screens/Profile";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useTheme } from "styled-components/native";
import RequireAuth from "../components/Auth/RequireAuth";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const theme = useTheme();
  return (
    <RequireAuth>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 50,
            backgroundColor: theme.COLORS.G1,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "#7657CB",
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="home" color={color} size={18} />
            ),
            tabBarLabel: "Inicio",
          }}
        />
        <Tab.Screen
          name="Liked"
          component={Liked}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="hearto" color={color} size={18} />
            ),
            tabBarLabel: "Curtidas",
          }}
        />
        <Tab.Screen
          name="AppConfig"
          component={AppConfig}
          options={{
            tabBarIcon: ({ color }) => (
              <Octicons name="gear" color={color} size={18} />
            ),
            tabBarLabel: "Configurações",
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user-o" color={color} size={18} />
            ),
            tabBarLabel: "Perfil",
          }}
        />
      </Tab.Navigator>
    </RequireAuth>
  );
}
