import axios from 'axios';

const BASEURL = process.env.REACT_APP_API_BASEURL;

export const commentApi = {
  create: async ({ token, data }) => {
    const response = await axios({
      method: 'post',
      url: `${BASEURL}/comments/create`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        comment: data.comment,
        postId: data.postId,
      },
    });

    return response.data;
  },
  delete: async ({ token, data }) => {
    const response = await axios({
      method: 'delete',
      url: `${BASEURL}/comments/delete`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        id: data.commentId,
      },
    });

    return response.data;
  },
};
