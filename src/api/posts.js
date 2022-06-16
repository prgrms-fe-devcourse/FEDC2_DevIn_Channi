import axios from 'axios';

const API = process.env.REACT_APP_API_BASEURL;

export const posts = {
  getPosts: async ({ offset, limit, channelId }) => {
    try {
      const response = await axios.get(`${API}/posts/channel/${channelId}`, {
        params: { offset, limit },
      });
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};
