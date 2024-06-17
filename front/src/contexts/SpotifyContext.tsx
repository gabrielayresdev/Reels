import React from "react";
import SpotifyService from "../services/SpotifyService";

type SpotifyContextValue = {
  token: string | null;
};

const SpotifyContext = React.createContext<SpotifyContextValue | null>(null);

const SpotifyContextProvider = ({ children }: React.PropsWithChildren) => {
  const [token, setToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    (async () => {
      const response = await SpotifyService.getToken();
      if (response.data?.access_token) {
        setToken(response.data.access_token);
      }
    })();
  }, []);

  return (
    <SpotifyContext.Provider value={{ token }}>
      {children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyContextProvider;

export const useSpotifyContext = () => {
  const context = React.useContext(SpotifyContext);
  if (!context)
    throw new Error("useSpotifyContext must be used inside provider");
  return context;
};
