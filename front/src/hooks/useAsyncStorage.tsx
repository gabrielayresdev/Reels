import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Dispatch<T> = React.Dispatch<React.SetStateAction<T>>;

function useAsyncStorage(
  key: string
): [string | null, Dispatch<string | null>] {
  const [state, setState] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadToken = async () => {
      try {
        const local = await AsyncStorage.getItem(key);
        if (local) {
          setState(local);
        }
      } catch (error) {
        console.error("Failed to load the token from storage", error);
      }
    };

    loadToken();
  }, []);

  React.useEffect(() => {
    const saveToken = async () => {
      try {
        if (state) {
          await AsyncStorage.setItem(key, state);
        } else {
          await AsyncStorage.removeItem(key);
        }
      } catch (error) {
        console.error("Failed to save the token to storage", error);
      }
    };

    saveToken();
  }, [state]);

  return [state, setState];
}

export default useAsyncStorage;
