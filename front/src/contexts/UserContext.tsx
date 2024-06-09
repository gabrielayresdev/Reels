import React from "react";
import { TOKEN } from "../storage/storageConfig";
import useAsyncStorage from "../hooks/useAsyncStorage";
export type User = {
  id: string;
  name: string;
  email: string;
  hash: string;
  salt: string;
  phone: string;
  adm: boolean;
};

const UserContext = React.createContext<RegisterContextProps | null>(null);

type RegisterContextProps = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

export function useUserContext() {
  const context = React.useContext(UserContext);
  if (!context) throw new Error("useContext must be inside provider");
  else return context;
}

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [token, setToken] = useAsyncStorage(TOKEN);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
