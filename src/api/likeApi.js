import axios from 'axios';

const BASEURL = process.env.REACT_APP_API_BASEURL;

export const likeApi = {
  create: async ({ token, data }) => {
    const response = await axios({
      method: 'post',
      url: `${BASEURL}/likes/create`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        postId: data.postId,
      },
    });

    return response.data;
  },
  delete: async ({ token, data }) => {
    const response = await axios({
      method: 'delete',
      url: `${BASEURL}/likes/delete`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        id: data.likeId,
      },
    });

    return response.data;
  },
};
