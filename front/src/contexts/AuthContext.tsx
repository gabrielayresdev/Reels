import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TOKEN } from "../storage/storageConfig";
import useAsyncStorage from "../hooks/useAsyncStorage";
import AuthService from "../services/AuthService";

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
};
type LoginProps = {
  email: string;
  password: string;
};
type AuthContextValue = {
  user: User | null;
  token: string | null;
  loginAction: (data: LoginProps) => void;
  logOut: () => void;
};

const AuthContext = React.createContext<AuthContextValue | null>(null);

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [token, setToken] = useAsyncStorage(TOKEN);
  const navigation = useNavigation();

  const loginAction = async (data: LoginProps) => {
    try {
      const response = await AuthService.login(data);
      if (response?.data.token && response.data.user) {
        const { token, user } = response.data;
        setUser(user);
        setToken(token);
        navigation.navigate("Auth");
        return;
      }
      throw new Error(response?.statusText);
    } catch (err) {
      console.error(err);
    }
  };

  const getData = React.useCallback(async () => {
    if (!user && token) {
      try {
        const response = await AuthService.getData(token);

        if (response?.data.user) {
          setUser(response.data.user);
          navigation.navigate("Auth");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, [navigation, token, user]);

  React.useEffect(() => {
    getData();
  }, [token, getData]);

  const logOut = () => {
    setUser(null);
    setToken(null);
    navigation.navigate("Login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error("AuthContext must be used inside provider");
  return context;
};
