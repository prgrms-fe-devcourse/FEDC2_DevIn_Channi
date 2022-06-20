import axios from 'axios';

const BASEURL = process.env.REACT_APP_API_BASEURL;

export const likeApi = {
  create: async ({ postId, token }) => {
    const response = await axios({
      method: 'post',
      url: `${BASEURL}/likes/create`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        postId,
      }),
    });

    return response.data;
  },
  delete: async ({ likeId, token }) => {
    const response = await axios({
      method: 'delete',
      url: `${BASEURL}/likes/delete`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        id: likeId,
      }),
    });

    return response.data;
  },
};
