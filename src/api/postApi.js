import axios from 'axios';

const API = process.env.REACT_APP_API_BASEURL;
const CHANNEL_ID = process.env.REACT_APP_API_CHANNEL_ID;

export const postApi = {
  getAll: async ({ params }) => {
    const response = await axios({
      method: 'get',
      url: `${API}/posts/channel/${CHANNEL_ID}`,
      params: {
        offset: params.offset,
        limit: params.limit,
      },
    });
    return response.data;
  },

  delete: async ({ token, data }) => {
    const response = axios({
      method: 'delete',
      url: `${API}/posts/delete`,
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
