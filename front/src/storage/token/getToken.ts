import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN } from "../storageConfig";

export async function getToken() {
  try {
    const token = await AsyncStorage.getItem(TOKEN);
    return token;
  } catch (error) {
    throw error;
  }
}
