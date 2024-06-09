import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN } from "../storageConfig";

export async function saveToken(token: string) {
  try {
    const storage = JSON.stringify(token);
    await AsyncStorage.setItem(TOKEN, storage);
  } catch (error) {
    throw error;
  }
}
