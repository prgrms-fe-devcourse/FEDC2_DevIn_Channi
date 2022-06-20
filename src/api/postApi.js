import axios from 'axios';

const BASEURL = process.env.REACT_APP_API_BASEURL;
const CHANNEL_ID = process.env.REACT_APP_API_CHANNEL_ID;

export const postApi = {
  getAll: async () => {
    const response = await axios.get(`${BASEURL}/posts/channel/${CHANNEL_ID}`);
    return response.data;
  },

  delete: async ({ token, data }) => {
    const response = axios({
      method: 'delete',
      url: `${BASEURL}/posts/delete`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        id: data.postId,
      },
    });
    return response.data;
  },
};
