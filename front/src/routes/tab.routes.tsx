import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Liked from "../screens/Liked";
import AppConfig from "../screens/AppConfig";
import Profile from "../screens/Profile";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
          backgroundColor: "#000",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: () => <Feather name="home" color={"#fff"} size={18} />,
          tabBarLabel: "Inicio",
          tabBarLabelStyle: {
            color: "#fff",
          },
        }}
      />
      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarIcon: () => (
            <AntDesign name="hearto" color={"#fff"} size={18} />
          ),
          tabBarLabel: "Curtidas",
          tabBarLabelStyle: {
            color: "#fff",
          },
        }}
      />
      <Tab.Screen
        name="AppConfig"
        component={AppConfig}
        options={{
          tabBarIcon: () => <Octicons name="gear" color={"#fff"} size={18} />,
          tabBarLabel: "Configurações",
          tabBarLabelStyle: {
            color: "#fff",
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="user-o" color={"#fff"} size={18} />
          ),
          tabBarLabel: "Perfil",
          tabBarLabelStyle: {
            color: "#fff",
          },
        }}
      />
    </Tab.Navigator>
  );
}
