import api, { spotify } from "../api";

export default {
  async getToken() {
    try {
      const response = api.get("/authSpotify?");
      return response;
    } catch (error) {
      throw error;
    }
  },
  async searchMusicByName(name: string, access_token: string) {
    try {
      const response = spotify.get(`/search?q=${name}&type=track&market=BR`, {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
};
