import api from "../api";

export default {
  async getPosts(limit?: number, offset?: number) {
    try {
      console.log(`Limit: ${limit}, offset: ${offset}`);
      const response = api.get(
        `/posts?${limit ? `limit=${limit}` : ""}${
          offset ? `&offset=${offset}` : ""
        }`
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};
