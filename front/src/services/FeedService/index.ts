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

  async getPostsById(postsIds: string[], token: string) {
    try {
      const promises = Promise.all(
        postsIds.map((postId) =>
          api.get(`/post/${postId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        )
      );
      return promises;
    } catch (error) {
      console.log(error);
    }
  },

  async handleLike(postId: string, token: string) {
    try {
      const response = api.put(
        `/handleLike/${postId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
