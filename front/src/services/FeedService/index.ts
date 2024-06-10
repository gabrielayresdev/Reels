import api from "../api";

export default {
  async getPosts() {
    try {
      const response = api.get(`/posts`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
