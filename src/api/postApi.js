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

  get: async ({ postId }) => {
    console.log(postId);
    const response = await axios.get(`${API}/posts/${postId}`);
    return response.data;
  },

  create: async ({ token, data }) => {
    const json = JSON.stringify({
      content: data.content,
      og: data.og,
    });

    const formData = new FormData();

    formData.append('title', json);
    formData.append('image', null);
    formData.append('channelId', CHANNEL_ID);

    const response = axios({
      method: 'post',
      url: `${API}/posts/create`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    });
    return response.data;
  },

  update: async ({ token, data }) => {
    const json = JSON.stringify({
      content: data.content,
      og: data.og,
    });

    const formData = new FormData();

    formData.append('postId', data.postId);
    formData.append('title', json);
    formData.append('image', null);
    formData.append('channelId', CHANNEL_ID);

    const response = axios({
      method: 'put',
      url: `${API}/posts/update`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
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
