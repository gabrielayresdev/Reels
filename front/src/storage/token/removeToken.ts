import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN } from "../storageConfig";

export async function removeToken() {
  try {
    await AsyncStorage.removeItem(TOKEN);
  } catch (error) {
    throw error;
  }
}
